package com.example.shopm.repository

import com.example.shopm.dataStruct.AccountField
import io.ktor.client.HttpClient
import javax.inject.Inject
import io.ktor.client.call.body
import io.ktor.client.request.get


class UserRepository @Inject constructor(
    private val client: HttpClient
) {
    suspend fun getUser(): AccountField {
        return client.get("https://api.example.com/user").body()
    }
}