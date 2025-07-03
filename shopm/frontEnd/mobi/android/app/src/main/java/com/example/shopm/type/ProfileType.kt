package com.example.shopm.type

import com.example.shopm.constant.ConstText


object ProfileType {
    enum class Menu(val title: String) {
        HOME(ConstText.HOME),
        PATIENT_RECORD(ConstText.PATIENT_RECORD),
        BUY_HISTORY(ConstText.BUY_HISTORY)
    }
}