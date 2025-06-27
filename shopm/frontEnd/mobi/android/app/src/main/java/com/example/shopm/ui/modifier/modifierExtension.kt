package com.example.shopm.ui.modifier

import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

fun Modifier.bottomBorder(
    strokeWidth: Dp = 1.dp,
    color: Color = Color.Gray
): Modifier = this.then(
    Modifier.drawBehind {
        val strokePx = strokeWidth.toPx()
        val y = size.height - strokePx / 2
        drawLine(
            color = color,
            start = Offset(0f, y),
            end = Offset(size.width, y),
            strokeWidth = strokePx
        )
    }
)