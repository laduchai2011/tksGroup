package com.example.shopm.dataStruct


import io.ktor.http.Headers
import io.ktor.http.HeadersBuilder
import io.ktor.http.HttpMethod
import io.ktor.http.Url
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import io.ktor.util.AttributeKey


enum class TokenAuthStatus {
    SIGNIN,
    NORMAL,
    ACCESS_TOKEN_EXPIRED,
    REFRESH_TOKEN_EXPIRED,
    ACCOUNT_ATTACK
}

@Serializable
data class TokenAuth(
    val status: TokenAuthStatus? = TokenAuthStatus.NORMAL,
    val accessToken: String? = null,
    val refreshToken: String? = null
)

@Serializable
data class ResponseField<T>(
    val success: Boolean,
    val message: String,
    val data: T? = null,
    val error: JsonElement? = null,
    val tokenAuth: TokenAuth? = null
)

data class CustomRequestData(
    val method: HttpMethod,
    val url: Url,
    val headers: Headers = HeadersBuilder().build(),
    val body: Any? = null
) {
    companion object {
        val Key = AttributeKey<CustomRequestData>("CustomRequestData")
    }
}

sealed class ApiResult<out T> {
    data class Success<T>(val data: T) : ApiResult<T>()
    data class Error(val message: String, val exception: Throwable? = null) : ApiResult<Nothing>()
}