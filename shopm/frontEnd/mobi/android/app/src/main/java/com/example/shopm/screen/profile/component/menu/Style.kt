package com.example.shopm.screen.profile.component.menu

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.shopm.ui.modifier.bottomBorder


object MenuStyle {
    val parent = Modifier
        .fillMaxWidth()
        .height(50.dp)
        .background(Color.White)
        .bottomBorder(1.dp, Color.Gray)
}