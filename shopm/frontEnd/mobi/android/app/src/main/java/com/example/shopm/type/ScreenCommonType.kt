package com.example.shopm.type

object ScreenCommonType {
    enum class Option() {
        DIALOG,
    }

    data class Field(
        val isShow: String,
        val message: String
    )
}
