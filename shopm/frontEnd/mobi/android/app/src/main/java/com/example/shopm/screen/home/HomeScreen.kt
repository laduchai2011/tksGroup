package com.example.shopm.screen.home


import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

import androidx.compose.ui.tooling.preview.Preview



@Composable
fun HomeScreen() {
    HomeContent()
}

@Composable
fun HomeContent() {
    Text("home")

}

@Preview(showBackground = true)
@Composable
fun HomeContentPreview() {
    HomeContent()
}