package com.example.shopm.repository

import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface ProfileApiService {
    @GET("posts")
    suspend fun getPosts(): List<String>
}