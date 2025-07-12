package com.example.shopm.dataType

import kotlinx.serialization.Serializable

@Serializable
data class AccountField(
    val id: Int? = null,
    val userName: String,
    val password: String,
    val phone: String,
    val firstName: String,
    val lastName: String,
    val avatar: String? = null,
    val status: String,
    val updateTime: String,
)
