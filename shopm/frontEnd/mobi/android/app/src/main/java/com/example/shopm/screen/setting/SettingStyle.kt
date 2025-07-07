package com.example.shopm.screen.setting

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.shopm.ui.modifier.bottomBorder


object SettingStyle {
//    private val screenWidthPx = Resources.getSystem().displayMetrics.widthPixels
//    private val density = Resources.getSystem().displayMetrics.density
//    private val screenWidthDp = screenWidthPx / density

    val parent = Modifier
        .fillMaxWidth()
        .fillMaxHeight()
        .background(Color.White)

    val box = Modifier
        .fillMaxWidth()
        .height(50.dp)
        .background(Color.White)
        .bottomBorder(1.dp, Color.Gray)

    val row = Modifier
        .fillMaxWidth()
        .fillMaxHeight()

    val text = Modifier
        .padding(horizontal = 20.dp)
}