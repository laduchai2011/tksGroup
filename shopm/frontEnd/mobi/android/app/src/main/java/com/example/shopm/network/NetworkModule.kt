package com.example.shopm.network

import com.example.shopm.dataStruct.CustomRequestData
import com.example.shopm.serialization.AppJson
import com.example.shopm.token.Token
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import io.ktor.client.*
import io.ktor.client.call.body
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.ClientRequestException
import io.ktor.client.plugins.HttpResponseValidator
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.request
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import io.ktor.http.HttpStatusCode
import io.ktor.http.takeFrom



@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {


    @Provides
    @Singleton
    fun provideHttpClient(token: Token): HttpClient {

        return HttpClient(CIO) {
            install(ContentNegotiation) {
                json(AppJson)
            }
            expectSuccess = true

            defaultRequest {
                val accessToken = token.readAccessToken()
                if (!accessToken.isNullOrEmpty()) {
                    header(HttpHeaders.Authorization, "Bearer $accessToken")
                }
                contentType(ContentType.Application.Json)
            }

            HttpResponseValidator {
                handleResponseExceptionWithRequest { exception, request ->
                    if (exception is ClientRequestException && exception.response.status == HttpStatusCode.Unauthorized) {
                        val refreshToken = token.readRefreshToken()

                        if (!refreshToken.isNullOrEmpty()) {
                            // Gọi server để refresh token
                            val refreshClient = HttpClient(CIO) {
                                install(ContentNegotiation) {
                                    json(AppJson)
                                }
                            }
                            try {
                                val response = refreshClient.post("http://10.0.2.2:8080/auth/refresh") {
                                    contentType(ContentType.Application.Json)
                                    setBody(mapOf("refreshToken" to refreshToken))
                                }

                                if (response.status == HttpStatusCode.OK) {
                                    val responseBody = response.body<Map<String, String>>()
                                    val newAccessToken = responseBody["accessToken"]

                                    if (!newAccessToken.isNullOrEmpty()) {
                                        token.storeAccessToken(newAccessToken)

                                        // Lấy lại thông tin request cũ đã gắn kèm (CustomRequestData)
                                        val requestData = request.attributes.getOrNull(CustomRequestData.Key)
                                        if (requestData != null) {
                                            val retried = sendCustomRequest(requestData, newAccessToken)
                                            throw RetryWithResponseException(retried)
                                        }

                                    }
                                } else {
                                    throw Exception("Refresh failed")
                                }
                            } catch (e: Exception) {
                                throw e
                            } finally {
                                refreshClient.close()
                            }
                        }
                    }
                }
            }
        }
    }
}

class RetryWithResponseException(val response: HttpResponse) : Exception()


suspend fun sendCustomRequest(requestData: CustomRequestData, accessToken: String): HttpResponse {
    return HttpClient(CIO) {
        install(ContentNegotiation) {
            json(AppJson)
        }
        defaultRequest {
            header(HttpHeaders.Authorization, "Bearer $accessToken")
            contentType(ContentType.Application.Json)
        }
    }.use { client ->
        client.request {
            method = requestData.method
            url.takeFrom(requestData.url)
            headers.appendAll(requestData.headers)

            requestData.body?.let {
                setBody(it)
            }

            // Gắn lại dữ liệu để retry nếu gặp lỗi
            attributes.put(CustomRequestData.Key, requestData)
        }
    }
}