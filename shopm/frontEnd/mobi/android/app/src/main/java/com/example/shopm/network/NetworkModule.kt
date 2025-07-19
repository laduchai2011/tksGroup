package com.example.shopm.network

import com.example.shopm.serialization.AppJson
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.serialization.kotlinx.json.json


@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {

    @Provides
    @Singleton
    fun provideHttpClient(): HttpClient {
//        return HttpClient(CIO) {
//            // config...
//        }
        return HttpClient(CIO) {
            install(ContentNegotiation) {
                json(AppJson)
            }
            expectSuccess = true
        }
    }
}