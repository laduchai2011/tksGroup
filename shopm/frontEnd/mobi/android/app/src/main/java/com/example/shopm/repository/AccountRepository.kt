package com.example.shopm.repository

import com.example.shopm.dataStruct.AccountField
import com.example.shopm.dataStruct.ResponseField
import com.example.shopm.constant.AccountURL
import com.example.shopm.dataStruct.ApiResult
import io.ktor.client.HttpClient
import javax.inject.Inject
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType



class AccountRepository @Inject constructor(
    private val client: HttpClient
) {
    suspend fun signupToDB(account: AccountField): ApiResult<ResponseField<AccountField>> { 
        return try {
            val response = client.post(AccountURL.signupUrl()) {
                contentType(ContentType.Application.Json)
                setBody(account)
            }.body<ResponseField<AccountField>>()

            ApiResult.Success(response)
        } catch (e: Exception) {
            ApiResult.Error("Signup failed: ${e.message}", e)
        }
    }

    suspend fun signin(account: AccountField): ApiResult<ResponseField<AccountField>> {
        return try {
            val response = client.get(AccountURL.signinUrl()).body<ResponseField<AccountField>>()
            ApiResult.Success(response)
        } catch (e: Exception) {
            ApiResult.Error("Signup failed: ${e.message}", e)
        }
    }
}