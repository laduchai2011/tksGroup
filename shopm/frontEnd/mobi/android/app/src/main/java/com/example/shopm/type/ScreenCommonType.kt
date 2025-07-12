package com.example.shopm.type

object ScreenCommonType {
    enum class Option() {
        TOAST_MESSAGE,
        LOADING_ICON
    }

    enum class ToastMessageType() {
        DIALOG,
        RIGHT_TAB
    }

    data class FieldToastMessage(
        val message: String
    )

    enum class LoadingIconType() {
        BASIC,
        PROCESS
    }
}
