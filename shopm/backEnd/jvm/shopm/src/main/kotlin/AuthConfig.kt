package org.example

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import org.example.dataStruct.AccountField
import java.time.format.DateTimeFormatter
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
                if (credential.payload.getClaim("username").asString().isNotBlank()) {
                    JWTPrincipal(credential.payload)
                } else null
            }
        }
    }
}

fun generateToken(account: AccountField, expiresAt: Date): String {
    val secret = "my-super-secret-shopm"
    val issuer = "ktor.io"
    val algorithm = Algorithm.HMAC256(secret)
    val formatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME
    val updateTimeStr = account.updateTime.format(formatter)

    return JWT.create()
        .withIssuer(issuer)
        .withClaim("id", account.id)
        .withClaim("userName", account.userName)
        .withClaim("password", account.password)
        .withClaim("phone", account.phone)
        .withClaim("firstName", account.firstName)
        .withClaim("lastName", account.lastName)
        .withClaim("updateTime", updateTimeStr)
        .withExpiresAt(expiresAt)
        .sign(algorithm)
}