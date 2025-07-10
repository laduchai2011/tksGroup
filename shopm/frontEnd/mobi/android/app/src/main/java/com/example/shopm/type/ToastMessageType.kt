package com.example.shopm.type


object ToastMessageType {
    enum class Option() {
        DIALOG,
    }

    data class Field(
        val isShow: Boolean,
        val message: String
    )
}

