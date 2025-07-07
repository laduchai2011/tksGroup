package com.example.shopm.type

import com.example.shopm.constant.ConstText


object SignupType {
    enum class Option(val title: String) {
        ACCOUNT(ConstText.ACCOUNT),
        PASSWORD(ConstText.PASSWORD),
        PHONE_NUMBER(ConstText.PHONE_NUMBER),
        FIRST_NAME(ConstText.FIRST_NAME),
        LAST_NAME(ConstText.LAST_NAME)
    }

    enum class MaxLen(val value: Int) {
        ACCOUNT(100),
        PASSWORD(100),
        PHONE_NUMBER(15),
        FIRST_NAME(20),
        LAST_NAME(20)
    }
}