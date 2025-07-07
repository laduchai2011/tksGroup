package com.example.shopm.screen.setting

import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.LocalIndication
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import com.example.shopm.navigator.OtherScreenRoutes
import com.example.shopm.navigator.localNavController
import com.example.shopm.type.SettingType


@Composable
fun SettingScreen() {
    SettingContent()
}

@Composable
fun SettingContent() {
    val navController = localNavController.current

    val items = listOf(
        SettingType.Option.SIGNUP,
        SettingType.Option.SIGNIN
    )

    fun onClick(item: SettingType.Option) {
        when (item.ordinal) {
            SettingType.Option.SIGNUP.ordinal -> navController.navigate(OtherScreenRoutes.Signup.toString())
            SettingType.Option.SIGNIN.ordinal -> navController.navigate(OtherScreenRoutes.Signin.toString())
            else -> println("Unknown")
        }
    }

    Column(modifier = SettingStyle.parent) {
        items.forEach { item ->
            Box(
                modifier = SettingStyle.box.clickable(
                    onClick = { onClick(item) },
                    interactionSource = remember { MutableInteractionSource() },
                    indication = LocalIndication.current
                )
            ) {
                Row(
                    modifier = SettingStyle.row,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(item.title, modifier = SettingStyle.text, fontSize = 20.sp)
                }
            }
        }

    }
}

@Preview(showBackground = true)
@Composable
fun SettingContentPreview() {
    SettingContent()
}