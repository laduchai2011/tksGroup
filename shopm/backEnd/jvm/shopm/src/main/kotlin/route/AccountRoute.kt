package org.example.route


import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.HttpStatusCode
import org.example.dataStruct.AccountField
import org.example.dataStruct.ResponseField
import org.example.route.account.AccountMutateSqlServer
//import java.util.logging.Logger

//val logger = Logger.getLogger("MyLogger")

fun Route.accountRoute() {
    route("/signup") {
        post {
            val myAccount = call.receive<AccountField>()
//            call.respond(request)
            val accountMutateSqlServer = AccountMutateSqlServer()
            val isAccountCheckUserName = accountMutateSqlServer.isAccountCheckUserName(myAccount.userName)
            val isAccountCheckPhone = accountMutateSqlServer.isAccountCheckPhone(myAccount.phone)

            lateinit var response: ResponseField<AccountField>

//            logger.info("$isAccountCheckUserName")

            when {
                isAccountCheckUserName -> {
                    val newRes: ResponseField<AccountField> = ResponseField(
                        success = false,
                        message = "Username already exists",
                        data = null,
                        error = null
                    )
                    response = newRes
//                    call.respond(HttpStatusCode.Conflict, "Username already exists.")
                }

                isAccountCheckPhone -> {
//                    call.respond(HttpStatusCode.Conflict, "Phone number already registered")
                    val newRes: ResponseField<AccountField> = ResponseField(
                        success = false,
                        message = "Phone number already registered",
                        data = null,
                        error = null
                    )
                    response = newRes
                }

                else -> {
                    // Gọi hàm tạo tài khoản ở đây nếu mọi thứ hợp lệ
                    val newAccount = accountMutateSqlServer.signupToDB(
                        userName = myAccount.userName,
                        password = myAccount.password,
                        phone = myAccount.phone,
                        firstName = myAccount.firstName,
                        lastName = myAccount.lastName
                    )
                    if (newAccount != null) {
//                        call.respond(HttpStatusCode.Created, "Account created successfully.")
                        val newRes: ResponseField<AccountField> = ResponseField(
                            success = true,
                            message = "Account created successfully",
                            data = newAccount,
                            error = null
                        )
                        response = newRes
                    } else {
//                        call.respond(HttpStatusCode.InternalServerError, "Failed to create account.")
                        val newRes: ResponseField<AccountField> = ResponseField(
                            success = false,
                            message = "Failed to create account",
                            data = null,
                            error = null
                        )
                        response = newRes
                    }
                }
            }

            call.respond(HttpStatusCode.Created, response)
        }
    }
}