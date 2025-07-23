package org.example.route


import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.HttpStatusCode
import org.example.dataStruct.AccountField
import org.example.dataStruct.ResponseField
import org.example.dataStruct.TokenAuth
import org.example.dataStruct.TokenAuthStatus
import org.example.generateToken
import org.example.route.account.AccountMutateSqlServer
import org.example.route.account.AccountQuerySqlServer
import java.time.temporal.ChronoUnit
import java.util.Date
import java.time.Instant

//import java.util.logging.Logger

//val logger = Logger.getLogger("MyLogger")

const val Username_Used = "Tên tài khoản đã được sử dụng"
const val Phone_Number_Used = "Số điện thoại đã được sử dụng"
const val Account_Created_Successfully = "Tài khoản được tạo thành công"
const val Account_Created_Failed = "Tài khoản được tạo thất bại"
const val Signin_Successfully = "Đăng nhập thành công"
const val Signin_Failed = "Đăng nhập thất bại, Tài khoản không tồn tại"


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
                        message = Username_Used,
                        data = null,
                        error = null
                    )
                    response = newRes
                }

                isAccountCheckPhone -> {
                    val newRes: ResponseField<AccountField> = ResponseField(
                        success = false,
                        message = Phone_Number_Used,
                        data = null,
                        error = null
                    )
                    response = newRes
                }

                else -> {
                    val newAccount = accountMutateSqlServer.signupToDB(
                        userName = myAccount.userName,
                        password = myAccount.password,
                        phone = myAccount.phone,
                        firstName = myAccount.firstName,
                        lastName = myAccount.lastName
                    )
                    if (newAccount != null) {
                        val newRes: ResponseField<AccountField> = ResponseField(
                            success = true,
                            message = Account_Created_Successfully,
                            data = newAccount,
                            error = null
                        )
                        response = newRes
                    } else {
                        val newRes: ResponseField<AccountField> = ResponseField(
                            success = false,
                            message = Account_Created_Failed,
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

    route("/signin") {
        get {
            val myAccount = call.receive<AccountField>()

            val accountQuerySqlServer = AccountQuerySqlServer()
            val account = accountQuerySqlServer.signin(userName = myAccount.userName, password = myAccount.password)

            lateinit var response: ResponseField<AccountField>

            if (account != null) {
                val expiresAtAccessToken = Date.from(Instant.now().plus(5/60, ChronoUnit.HOURS))
                val expiresAtRefreshToken = Date.from(Instant.now().plus(8760, ChronoUnit.HOURS))
                val accessToken = generateToken(myAccount, expiresAtAccessToken)
                val refreshToken = generateToken(myAccount, expiresAtRefreshToken)
                val newRes: ResponseField<AccountField> = ResponseField(
                    success = true,
                    message = Signin_Successfully,
                    data = account,
                    error = null,
                    tokenAuth = TokenAuth(
                        status = TokenAuthStatus.SIGNIN,
                        accessToken = accessToken,
                        refreshToken = refreshToken
                    )
                )
                response = newRes
            } else {
                val newRes: ResponseField<AccountField> = ResponseField(
                    success = false,
                    message = Signin_Failed,
                    data = null,
                    error = null
                )
                response = newRes
            }

            call.respond(HttpStatusCode.Created, response)
        }
    }
}