package org.example.route

import io.ktor.server.routing.Route
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import org.example.route.auth.RefreshTokenRequest
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import org.example.TokenInforField
import org.example.route.auth.JwtConfig
import org.example.route.auth.JwtConfig.createAccessToken
import org.example.route.auth.JwtConfig.extractTokenInfo
import org.example.route.auth.JwtConfig.validateRefreshToken


fun Route.authRoute() {
    route("/refreshToken") {
        post {
            val request = call.receive<RefreshTokenRequest>()

            val isValid = validateRefreshToken(request.refreshToken)
            if (!isValid) {
                call.respondText("Invalid refresh token", status = io.ktor.http.HttpStatusCode.Unauthorized)
                return@post
            }

            val tokenInfor: TokenInforField? = extractTokenInfo(request.refreshToken)
            if (tokenInfor==null) {
                call.respondText("Invalid refresh token", status = io.ktor.http.HttpStatusCode.Unauthorized)
                return@post
            }

            val newAccessToken = createAccessToken(tokenInfor)

            call.respond(JwtConfig.AccessTokenResponse(accessToken = newAccessToken))
        }
    }
}