package com.example.shopm.serialization

import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.contextual
import java.time.OffsetDateTime

val AppJson = Json {
    serializersModule = SerializersModule {
        contextual(OffsetDateTime::class, OffsetDateTimeSerializer)
    }
    ignoreUnknownKeys = true
}