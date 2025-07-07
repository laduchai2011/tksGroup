package com.example.shopm.type

import com.example.shopm.constant.ConstText


object SettingType {
    enum class Option(val title: String) {
        SIGNUP(ConstText.SIGNUP),
        SIGNIN(ConstText.SIGNIN),
    }
}