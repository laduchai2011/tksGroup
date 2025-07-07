package com.example.shopm.dataType

import kotlinx.serialization.Serializable

@Serializable
data class AccountOption(
    val id: Int,
    val userName: String,
    val password: String,
    val phone: String,
    val firstName: String,
    val lastName: String,
    val avatar: String? = null,
    val status: String,
    val updateTime: String,
)
