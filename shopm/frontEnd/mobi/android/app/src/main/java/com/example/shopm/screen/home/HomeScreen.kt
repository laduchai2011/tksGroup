package com.example.shopm.screen.home


import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp


@Composable
fun HomeScreen() {
    HomeContent()
}

@Composable
fun HomeContent() {
    Column(modifier = HomeStyle.parent) {
        Box(modifier = HomeStyle.titleBox, contentAlignment = Alignment.Center) {
            Text("Hãy quan tâm sức khỏe", fontSize = 30.sp, fontWeight = FontWeight.Bold)
        }
    }
}

@Preview(showBackground = true)
@Composable
fun HomeContentPreview() {
    HomeContent()
}