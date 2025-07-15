package com.example.shopm.serialization

import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.contextual
import java.time.OffsetDateTime

val json = Json {
    serializersModule = SerializersModule {
        contextual(OffsetDateTime::class, OffsetDateTimeSerializer)
    }
    ignoreUnknownKeys = true
}