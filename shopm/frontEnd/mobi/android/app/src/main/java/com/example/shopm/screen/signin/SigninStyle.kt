package com.example.shopm.screen.signin


import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp



object SigninStyle {

    private val signinBtnColor = Color(0xFF8dc6ff)

    val parent = Modifier
        .fillMaxSize()

    val row = Modifier
        .padding(5.dp)

    val title = Modifier
        .width(80.dp)

    val input = Modifier
        .width(300.dp)

    val signinBtn = Modifier
        .width(300.dp)
        .wrapContentWidth()
        .wrapContentHeight()
        .background(signinBtnColor)
        .border(0.1.dp, Color.Gray)
        .padding(5.dp)

    val signupBtn = Modifier
        .wrapContentSize()

}