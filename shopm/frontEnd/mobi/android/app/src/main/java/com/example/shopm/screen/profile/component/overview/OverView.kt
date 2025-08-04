package com.example.shopm.screen.profile.component.overview

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.StarBorder
import androidx.compose.material3.Icon
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp

//import com.example.shopm.BuildConfig


@Composable
fun OverView() {
    OverViewContent()
}

@Composable
fun OverViewContent() {
    val user = "la duc hai"
    val url = "https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg"

//    if (BuildConfig.DEV_MODE) {
//    }

    fun onClick() {

    }

    Column( modifier = OverViewStyle.parent ) {
        Box( modifier = OverViewStyle.bannerContainer ) {
            AsyncImage( modifier = OverViewStyle.bannerImage, model = url, contentDescription = null, contentScale = ContentScale.Fit )
            Box( modifier = OverViewStyle.bannerButton.align(Alignment.BottomEnd), contentAlignment = Alignment.Center ) {
                Text("+", color = Color.Black, fontSize = 20.sp )
            }
        }
        Row( modifier = OverViewStyle.recommendContainer) {
            Box( modifier = OverViewStyle.avatarContainer, contentAlignment = Alignment.Center ) {
                AsyncImage( modifier = OverViewStyle.avatarImage, model = url, contentDescription = null, contentScale = ContentScale.Fit )
            }
            Box( modifier = OverViewStyle.inforContainer ) {
                Column(modifier = OverViewStyle.inforText) {
                    Text( user, color = Color.Black, fontSize = 20.sp, fontWeight = FontWeight.Bold, maxLines = 1, overflow = TextOverflow.Ellipsis )
                    Text("note", color = Color.Black, fontSize = 16.sp, fontWeight = FontWeight.W300, maxLines = 1, overflow = TextOverflow.Ellipsis )
                    Row {
                        repeat(5) {
                            Icon( imageVector = Icons.Filled.StarBorder, contentDescription = "Star Border", tint = Color.Red )
                        }
                    }
                    Row {
                        Box( modifier = OverViewStyle.followBtn.clickable { onClick() }, contentAlignment = Alignment.Center ) {
                            Text(text = "Follow", color = Color.Red)
                        }
                        Spacer(modifier = Modifier.width(8.dp))
                        Box(
                            modifier = OverViewStyle.chatBtn.clickable { onClick() }, contentAlignment = Alignment.Center ) {
                            Text(text = "Chat", color = Color.Blue)
                        }
                    }
                }
            }
        }
    }
}


@Preview(showBackground = true)
@Composable
fun OverViewContentPreview() {

//    OverViewContent(user)
}