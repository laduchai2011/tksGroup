package org.example

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import org.example.dataStruct.AccountField
import org.example.dataStruct.AccountState
import java.time.OffsetDateTime
import java.util.Date

fun Application.configureAuth() {
    val secret = "my-super-secret"
    val issuer = "ktor.io"
    val realm = "ktor sample app"

    install(Authentication) {
        jwt("auth-jwt") {
            this.realm = realm
            verifier(
                JWT.require(Algorithm.HMAC256(secret))
                    .withIssuer(issuer)
                    .build()
            )
            validate { credential ->
                val payload = credential.payload
                val id = payload.getClaim("id")?.asInt()
                val userName = payload.getClaim("username")?.asString()
                val statusStr = payload.getClaim("status")?.asString()

                if (id == null || userName.isNullOrBlank() || statusStr.isNullOrBlank()) {
                    return@validate null
                }

                AccountState.fromValue(statusStr) ?: return@validate null

                // bạn có thể lưu `account` vào session, context, hoặc custom principal nếu cần
                JWTPrincipal(payload)
//                return@validate AccountPrincipal(account)
            }
        }
    }
}


    @Serializable
    data class TokenInforField(
        val id: Int? = null,
        val userName: String,
        val status: AccountState? = AccountState.NORMAL
    )

fun generateToken(tokenInfor: TokenInforField, expiresAt: Date): String {
    val secret = "my-super-secret-shopm"
    val issuer = "ktor.io"
    val algorithm = Algorithm.HMAC256(secret)

    return JWT.create()
        .withIssuer(issuer)
        .withClaim("id", tokenInfor.id)
        .withClaim("userName", tokenInfor.userName)
        .withClaim("status", tokenInfor.status?.value)
        .withExpiresAt(expiresAt)
        .sign(algorithm)
}