package org.example

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import io.ktor.server.routing.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import io.ktor.serialization.kotlinx.json.*
import org.example.route.accountRoute

fun main() {
    embeddedServer(Netty, port = 6000, host = "0.0.0.0") {
        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = false
                ignoreUnknownKeys = false
            })
        }

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
    }.start(wait = true)
}

@Serializable
data class Message(val content: String)