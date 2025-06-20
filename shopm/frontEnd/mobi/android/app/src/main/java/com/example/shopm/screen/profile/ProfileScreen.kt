package com.example.shopm.screen.profile

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import com.example.shopm.screen.profile.component.overview.OverView



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
//        Text("This is the Profile Screen")
//        Button(
//            onClick = onNavigateToSettings, Modifier
//                .fillMaxWidth()
//        ) {
//            Text("Go to Settings")
//        }
        OverView()
    }
}

@Preview(showBackground = true)
@Composable
fun ProfileContentPreview() {
    ProfileContent()
}