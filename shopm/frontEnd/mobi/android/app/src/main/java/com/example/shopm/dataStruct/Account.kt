package com.example.shopm.dataStruct

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import java.time.OffsetDateTime

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
    @Contextual val updateTime: OffsetDateTime
)
