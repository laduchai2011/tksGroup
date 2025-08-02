package org.example.route.auth

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import org.example.TokenInforField
import org.example.dataStruct.AccountState
import java.util.Date

data class TokenConfig(
    val issuer: String,
    val audience: String,
    val secret: String,
    val accessTokenExpiresIn: Long,   // milliseconds
    val refreshTokenExpiresIn: Long   // milliseconds
)

class TokenService {
    fun validateRefreshToken(token: String): Boolean {
        return try {
            JWT.require(Algorithm.HMAC256("secret"))
                .withIssuer("ktor.io")
                .build()
                .verify(token)
            true
        } catch (_: Exception) {
            false
        }
    }

    fun extractUserIdFromRefresh(token: String): TokenInforField? {
        return try {
            val decodedJWT = JWT.decode(token)
            val id = decodedJWT.getClaim("id").asInt()
            val userName = decodedJWT.getClaim("userName").asString()
            val statusString = decodedJWT.getClaim("status").asString()
            val status = runCatching { AccountState.valueOf(statusString) }.getOrNull()

            TokenInforField(
                id = id,
                userName = userName,
                status = status
            )
        } catch (_: Exception) {
            null
        }
    }

    fun generateAccessToken(tokenInfor: TokenInforField, config: TokenConfig): String {
        val now = System.currentTimeMillis()
        return JWT.create()
            .withIssuer(config.issuer)
            .withClaim("id", tokenInfor.id)
            .withClaim("userName", tokenInfor.userName)
            .withClaim("status", tokenInfor.status?.value)
            .withExpiresAt(Date(now + config.accessTokenExpiresIn))
            .sign(Algorithm.HMAC256(config.secret))
    }
}