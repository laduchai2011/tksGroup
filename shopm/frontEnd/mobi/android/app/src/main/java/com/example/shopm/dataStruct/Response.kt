package com.example.shopm.dataStruct

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement

@Serializable
data class ResponseField<T>(
    val success: Boolean,
    val message: String,
    val data: T? = null,
    val error: JsonElement? = null
)

sealed class ApiResult<out T> {
    data class Success<T>(val data: T) : ApiResult<T>()
    data class Error(val message: String, val exception: Throwable? = null) : ApiResult<Nothing>()
}