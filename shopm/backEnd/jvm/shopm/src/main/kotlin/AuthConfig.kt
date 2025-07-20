package org.example

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*

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

fun generateToken(username: String): String {
    val secret = "my-super-secret-shopm"
    val issuer = "ktor.io"
    val algorithm = Algorithm.HMAC256(secret)

    return JWT.create()
        .withIssuer(issuer)
        .withClaim("username", username)
        .sign(algorithm)
}