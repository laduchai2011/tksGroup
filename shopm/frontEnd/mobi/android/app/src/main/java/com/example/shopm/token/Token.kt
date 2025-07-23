package com.example.shopm.token

import android.content.Context
import android.content.SharedPreferences
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey
import androidx.core.content.edit



fun provideSecureSharedPreferences(context: Context): SharedPreferences {
    // Tạo master key (AES256_GCM)
    val masterKey = MasterKey.Builder(context)
        .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
        .build()

    // Tạo EncryptedSharedPreferences
    return EncryptedSharedPreferences.create(
        context,
        "secure_prefs", // tên file lưu trữ
        masterKey,
        EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
        EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
    )
}

class Token (private val context: Context) {
    private val prefs by lazy {
        provideSecureSharedPreferences(context)
    }

    fun storeAccessToken(token: String) {
        prefs.edit {
            putString("access_token", token)
        }
    }

    fun storeRefreshToken(token: String) {
        prefs.edit {
            putString("refresh_token", token)
        }
    }

    fun readAccessToken(): String? {
        val token = prefs.getString("access_token", null)
        return token
    }

    fun readRefreshToken(): String? {
        val token = prefs.getString("refresh_token", null)
        return token
    }
}