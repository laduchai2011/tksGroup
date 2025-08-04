package com.example.shopm.screen.profile

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
//import androidx.navigation.NavController
import com.example.shopm.screen.profile.component.overview.OverView
import com.example.shopm.screen.profile.component.overview.OverViewContent
import com.example.shopm.screen.profile.component.menu.MenuView
//import com.example.shopm.screen.profile.component.menu.MenuViewContent




@Composable
fun ProfileScreen() {
    ProfileContent()
}


@Composable
fun ProfileContent() {
    Column(
        Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .background(Color.Blue)
    ) {
        OverView()
        MenuView()
    }
}

@Preview(showBackground = true)
@Composable
fun ProfileContentPreview() {
    Column(
        Modifier
            .fillMaxWidth()
            .fillMaxHeight()
            .background(Color.Blue)
    ) {
        OverViewContent()
//        MenuViewContent(user = "hello kitty !")
    }
}