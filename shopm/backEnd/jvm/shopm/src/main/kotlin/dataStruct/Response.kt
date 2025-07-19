package org.example.dataStruct

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement

@Serializable
data class ResponseField<T>(
    val success: Boolean,
    val message: String,
    val data: T? = null,
    val error: JsonElement? = null
)