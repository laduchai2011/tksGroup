package org.example.serialization

import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.contextual
import java.time.OffsetDateTime

val AppSerializersModule = SerializersModule {
    contextual(OffsetDateTime::class, OffsetDateTimeSerializer)
}

val AppJson = Json {
    serializersModule = AppSerializersModule
    ignoreUnknownKeys = true
    prettyPrint = true
    isLenient = false
}