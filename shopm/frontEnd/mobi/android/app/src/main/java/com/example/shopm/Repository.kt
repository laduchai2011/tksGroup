package com.example.shopm

import javax.inject.Inject

class UserRepository @Inject constructor() {
    fun getUser() = "ChatGPT"
}