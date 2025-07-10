package com.example.shopm.screenCommon

import android.content.res.Resources
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.ui.Modifier

import androidx.compose.ui.unit.dp

object ScreenCommonStyle {
    private val screenWidthPx = Resources.getSystem().displayMetrics.widthPixels
    private val density = Resources.getSystem().displayMetrics.density
    private val screenWidthDp = screenWidthPx / density

    fun parent(isShow: Boolean): Modifier {
        var modifier = Modifier.fillMaxSize()

        if (!isShow) {
            modifier = modifier
                .offset(x = screenWidthDp.dp)
                .clickable(enabled = true, onClick = {})
        } else {
            modifier = modifier
                .offset(x = 0.dp)
        }

        return modifier
    }
}