package com.example.shopm.screen.profile.component.overview

import android.content.res.Resources
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.shopm.ui.modifier.bottomBorder


object OverViewStyle {
    private val screenWidthPx = Resources.getSystem().displayMetrics.widthPixels
    private val density = Resources.getSystem().displayMetrics.density
    private val screenWidthDp = screenWidthPx / density

    val parent = Modifier
        .fillMaxWidth()
        .height(350.dp)
        .background(Color.White)

    val bannerContainer = Modifier
        .fillMaxWidth()
        .height(200.dp)
        .background(Color.White)

    val bannerImage = Modifier
        .fillMaxWidth()
        .height(200.dp)
        .bottomBorder(1.dp, Color.Gray)

    val bannerButton = Modifier
        .width(40.dp)
        .height(40.dp)
        .alpha(0.5f)
        .fillMaxSize()

    val recommendContainer = Modifier
        .fillMaxWidth()
        .height(150.dp)
        .background(Color.White)
        .bottomBorder(1.dp, Color.Gray)
        .padding(20.dp)

    val avatarContainer = Modifier
        .width((screenWidthDp / 3).dp)
        .fillMaxHeight()

    val avatarImage = Modifier
        .fillMaxWidth()
        .aspectRatio(1f)
        .clip(RoundedCornerShape((screenWidthDp / 3).dp))
        .background(Color.White)
        .border(1.dp, Color.Gray, shape = RoundedCornerShape((screenWidthDp / 3).dp))

    val inforContainer = Modifier
        .width(((screenWidthDp / 3) * 2).dp)
        .fillMaxHeight()

    val inforText = Modifier
        .width(((screenWidthDp / 3) * 2).dp)
        .fillMaxHeight()
        .padding(start = 10.dp)

    val followBtn = Modifier
        .clip(RoundedCornerShape(12.dp))
        .background(Color.White, shape = RoundedCornerShape(12.dp))
        .border(1.dp, Color.Red, shape = RoundedCornerShape(12.dp))
        .width(60.dp)
        .height(40.dp)
        .padding(horizontal = 5.dp)

    val chatBtn = Modifier
        .clip(RoundedCornerShape(12.dp))
        .background(Color.White, shape = RoundedCornerShape(12.dp))
        .border(1.dp, Color.Blue, shape = RoundedCornerShape(12.dp))
        .width(60.dp)
        .height(40.dp)
        .padding(horizontal = 5.dp)
}