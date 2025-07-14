package org.example.route


import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.example.dataStruct.AccountField

fun Route.accountRoute() {
    route("/signup") {
        post {
            val request = call.receive<AccountField>()
            call.respond(request)
        }
    }
}