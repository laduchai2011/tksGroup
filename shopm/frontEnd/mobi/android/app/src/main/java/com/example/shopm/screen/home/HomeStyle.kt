package com.example.shopm.screen.home

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp


object HomeStyle {
//    private val screenWidthPx = Resources.getSystem().displayMetrics.widthPixels
//    private val density = Resources.getSystem().displayMetrics.density
//    private val screenWidthDp = screenWidthPx / density

    val parent = Modifier
        .fillMaxWidth()
        .fillMaxHeight()
        .background(Color.White)

    val titleBox = Modifier
        .padding(top = 30.dp)
        .fillMaxWidth()
        .height(50.dp)
}