package com.example.shopm.screen.signup

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.shopm.constant.ConstColor

object SignupStyle {
    val parent = Modifier
        .fillMaxSize()

    val header = Modifier
        .fillMaxWidth()
        .height(50.dp)
        .background(ConstColor.HEADER_BACKGROUND)

    val row = Modifier
        .padding(5.dp)

    val title = Modifier
        .width(80.dp)

    val input = Modifier
        .width(300.dp)
}