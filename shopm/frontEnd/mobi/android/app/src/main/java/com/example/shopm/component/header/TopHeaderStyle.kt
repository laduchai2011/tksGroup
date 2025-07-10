package com.example.shopm.component.header

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.shopm.constant.ConstColor

object TopHeaderStyle {
    val parent = Modifier
        .fillMaxWidth()
        .height(50.dp)
        .background(ConstColor.HEADER_BACKGROUND)

    val icon = Modifier
        .padding(start = 5.dp)
}