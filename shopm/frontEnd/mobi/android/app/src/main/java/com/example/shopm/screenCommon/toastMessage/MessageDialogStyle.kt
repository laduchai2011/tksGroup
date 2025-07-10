package com.example.shopm.screenCommon.toastMessage

import android.content.res.Resources
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

object MessageDialogStyle {
    private val screenWidthPx = Resources.getSystem().displayMetrics.widthPixels
    private val screenHeightPx = Resources.getSystem().displayMetrics.heightPixels
    private val density = Resources.getSystem().displayMetrics.density
    private val screenWidthDp = screenWidthPx / density
    private val screenHeightDp = screenHeightPx / density

    val parent = Modifier
        .width((0.8 * screenWidthDp).dp)
        .clip(RoundedCornerShape(10.dp)) // để nội dung bên trong cũng bo góc
        .background(Color.White)
        .border(
            width = 1.dp,
            color = Color.Gray,
            shape = RoundedCornerShape(10.dp) // border-radius
        )

    val mainFrame = Modifier
        .padding(8.dp)

    val content = Modifier
        .fillMaxWidth()
        .heightIn(min = 200.dp, max = (0.6 * screenHeightDp).dp)

}