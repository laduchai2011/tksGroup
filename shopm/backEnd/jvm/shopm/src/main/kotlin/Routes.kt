package org.example

import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.example.route.accountRoute

fun Application.configureRoutes() {
    routing {
        get("/") {
            call.respondText("Hello, Kotlin Backend!")
        }

        post("/echo") {
            val request = call.receive<Message>()
            call.respond(request)
        }

        route("/account") {
            accountRoute()
        }
    }
}