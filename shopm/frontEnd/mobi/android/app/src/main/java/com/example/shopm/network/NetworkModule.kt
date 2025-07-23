package com.example.shopm.network

import com.example.shopm.serialization.AppJson
import com.example.shopm.token.Token
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import io.ktor.client.*
//import io.ktor.client.call.body
import io.ktor.client.engine.cio.*
//import io.ktor.client.plugins.ClientRequestException
//import io.ktor.client.plugins.HttpResponseValidator
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.request.header
//import io.ktor.client.request.post
//import io.ktor.client.request.setBody
//import io.ktor.client.utils.EmptyContent.headers
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
//import io.ktor.http.HttpStatusCode



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

//            HttpResponseValidator {
//                handleResponseExceptionWithRequest { exception, request ->
//                    if (exception is ClientRequestException && exception.response.status == HttpStatusCode.Unauthorized) {
//                        val refreshToken = token.readRefreshToken()
//
//                        if (!refreshToken.isNullOrEmpty()) {
//                            try {
//                                // Gọi server để refresh token
//                                val refreshClient = HttpClient(CIO) {
//                                    install(ContentNegotiation) {
//                                        json(AppJson)
//                                    }
//                                }
//
//                                val response = refreshClient.post("http://10.0.2.2:8080/auth/refresh") {
//                                    contentType(ContentType.Application.Json)
//                                    setBody(mapOf("refreshToken" to refreshToken))
//                                }
//
//                                if (response.status == HttpStatusCode.OK) {
//                                    val responseBody = response.body<Map<String, String>>()
//                                    val newAccessToken = responseBody["accessToken"]
//
//                                    if (!newAccessToken.isNullOrEmpty()) {
//                                        // Lưu lại access token mới
//                                        token.storeAccessToken(newAccessToken)
//                                    }
//                                } else {
//                                    throw Exception("Refresh failed")
//                                }
//                            } catch (e: Exception) {
//                                throw e // Có thể logout hoặc xử lý khác
//                            }
//                        }
//                    }
//                }
//            }


        }
    }
}