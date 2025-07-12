package com.example.shopm.screenCommon

import android.content.res.Resources
import androidx.compose.animation.core.animateIntOffsetAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.IntOffset


object ScreenCommonStyle {

    val parent = Modifier
        .fillMaxSize()


    @Composable
    fun parentOffsetAnimate(isShow: Boolean): Modifier {
        val screenWidthPx = Resources.getSystem().displayMetrics.widthPixels
        val density = Resources.getSystem().displayMetrics.density
        val screenWidthDp = screenWidthPx / density

        val offsetTarget = if (!isShow) {
            IntOffset((screenWidthDp * Resources.getSystem().displayMetrics.density).toInt(), 0)
        } else {
            IntOffset(0, 0)
        }

        val animatedOffset by animateIntOffsetAsState(
            targetValue = offsetTarget,
            animationSpec = tween(durationMillis = 300),
            label = "animatedOffset"
        )

        return Modifier
            .offset { animatedOffset }
            .then(
                if (isShow) Modifier.clickable(enabled = true, onClick = {}) else Modifier
            )
    }
}

