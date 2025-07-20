package com.example.shopm.type

import com.example.shopm.constant.ConstText

object SigninType {
    enum class Option(val title: String) {
        ACCOUNT(ConstText.ACCOUNT),
        PASSWORD(ConstText.PASSWORD),
    }

    enum class MaxLen(val value: Int) {
        ACCOUNT(100),
        PASSWORD(100),
    }
}