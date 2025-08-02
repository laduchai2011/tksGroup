package org.example.dataStruct

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import java.time.OffsetDateTime

enum class AccountState(val value: String) {
    NORMAL("normal"),
    LOCK("lock"),
    DELETE("delete"),
    WARN("warn");

    companion object {
        fun fromValue(value: String): AccountState? {
            return entries.firstOrNull { it.value == value }
        }
    }
}

@Serializable
data class AccountField(
    val id: Int? = null,
    val userName: String,
    val password: String,
    val phone: String,
    val firstName: String,
    val lastName: String,
    val avatar: String? = null,
    val status: AccountState? = AccountState.NORMAL,
    @Contextual val updateTime: OffsetDateTime
)
