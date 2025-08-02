package org.example.route.auth

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import kotlinx.serialization.Serializable
import org.example.TokenInforField
import org.example.dataStruct.AccountState
import java.util.Date

object JwtConfig {
    private const val SECRET = "shopm" // Thay bằng giá trị thực
    private const val ISSUER = "shopm"
    private const val ACCESS_TOKEN_VALIDITY_IN_MS = 5 * 60 * 1000L // 5 phút
    private const val REFRESH_TOKEN_VALIDITY_IN_MS = 365 * 24 * 60 * 60 * 1000L // 7 ngày

    private val algorithm = Algorithm.HMAC256(SECRET)

    fun createAccessToken(tokenInfor: TokenInforField): String {
        val now = System.currentTimeMillis()

        return JWT.create()
            .withIssuer(ISSUER)
            .withClaim("id", tokenInfor.id)
            .withClaim("userName", tokenInfor.userName)
            .withClaim("status", tokenInfor.status?.value)
            .withIssuedAt(Date(now))
            .withExpiresAt(Date(now + ACCESS_TOKEN_VALIDITY_IN_MS))
            .sign(algorithm)
    }

    fun validateRefreshToken(token: String): Boolean {
        return try {
            JWT.require(Algorithm.HMAC256(SECRET))
            .withIssuer(ISSUER)
                .build()
                .verify(token)
            true
        } catch (_: Exception) {
            false
        }
    }

    fun extractTokenInfo(token: String): TokenInforField? {
        return try {
            val decodedJWT = JWT.require(algorithm)
                .withIssuer(ISSUER)
                .build()
                .verify(token)

            val id = decodedJWT.getClaim("id").asInt()
            val userName = decodedJWT.getClaim("userName").asString()
            val statusValue = decodedJWT.getClaim("status").asString()

            TokenInforField(
                id = id,
                userName = userName,
                status = statusValue?.let { AccountState.fromValue(it) }
            )
        } catch (e: Exception) {
            e.printStackTrace()
            null
        }
    }

    @Serializable
    data class AccessTokenResponse(val accessToken: String)

    fun createRefreshToken(tokenInfor: TokenInforField): String {
        val now = System.currentTimeMillis()

        return JWT.create()
            .withIssuer(ISSUER)
            .withClaim("id", tokenInfor.id)
            .withClaim("userName", tokenInfor.userName)
            .withClaim("status", tokenInfor.status?.value)
            .withIssuedAt(Date(now))
            .withExpiresAt(Date(now + REFRESH_TOKEN_VALIDITY_IN_MS))
            .sign(algorithm)
    }

    fun getAlgorithm(): Algorithm = algorithm
    fun getIssuer(): String = ISSUER
}