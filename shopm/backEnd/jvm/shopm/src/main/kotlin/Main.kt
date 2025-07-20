package org.example

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
//import io.ktor.server.response.*
//import io.ktor.server.request.*
//import io.ktor.server.routing.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.serialization.Serializable
import io.ktor.serialization.kotlinx.json.*
//import org.example.route.accountRoute
import org.example.serialization.AppJson
//import io.ktor.server.application.*
//import io.ktor.server.plugins.cors.routing.*
//import io.ktor.http.*


fun main() {
    embeddedServer(Netty, port = 6000, host = "0.0.0.0") {
//        install(CORS) {
//            // Cho phép các origin cụ thể (đúng domain của frontend)
//            allowHost("localhost:3000", schemes = listOf("http"))
//
//            // Hoặc cho phép tất cả origin (không khuyến khích ở production)
//            // anyHost()
//
//            // Cho phép các phương thức HTTP cụ thể
//            allowMethod(HttpMethod.Get)
//            allowMethod(HttpMethod.Post)
//            allowMethod(HttpMethod.Put)
//            allowMethod(HttpMethod.Delete)
//
//            // Cho phép các headers cụ thể
//            allowHeader(HttpHeaders.ContentType)
//            allowHeader(HttpHeaders.Authorization)
//
//            // Nếu bạn cần hỗ trợ credentials (cookies, authorization header)
//            allowCredentials = true
//
//            // Nếu muốn cho phép các headers cụ thể từ client
//            allowNonSimpleContentTypes = true
//        }

        install(ContentNegotiation) {
            json(AppJson)
        }

        configureAuth()

        configureRoutes()

//        routing {
//            get("/") {
//                call.respondText("Hello, Kotlin Backend!")
//            }
//
//            post("/echo") {
//                val request = call.receive<Message>()
//                call.respond(request)
//            }
//
//            route("/account") {
//                accountRoute()
//            }
//        }
    }.start(wait = true)
}

@Serializable
data class Message(val content: String)