package com.example.shopm.screen.profile.component.overview

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
//import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.LazyColumn
//import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage

@Composable
fun OverView() {
    OverViewContent()
}

@Composable
fun OverViewContent() {
    val myCustomColor = Color(0xffffffff)
    val url = "https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg"

    LazyColumn(
        Modifier
            .fillMaxWidth()
            .height(400.dp)
            .background(myCustomColor)
    ) {
        item {
            Column(
                Modifier
                    .fillMaxWidth()
                    .height(200.dp)
                    .background(Color.Yellow)
            ) {
                AsyncImage(
                    model = url,
                    contentDescription = null,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(200.dp)
                )
            }
        }
    }
}


@Preview(showBackground = true)
@Composable
fun OverViewContentPreview() {
    OverViewContent()
}