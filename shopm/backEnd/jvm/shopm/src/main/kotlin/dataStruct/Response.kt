package org.example.dataStruct

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement


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