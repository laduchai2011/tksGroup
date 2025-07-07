package com.example.shopm.screen.signin

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
import com.example.shopm.navigator.localNavController




@Composable
fun SigninScreen() {
    val navController = localNavController.current
    SigninContent(onNavigateToProfile = {
        navController.navigate("profile")
    })
}

@Composable
fun SigninContent(onNavigateToProfile: () -> Unit) {
    Text("signin")

}

@Preview(showBackground = true)
@Composable
fun SigninContentPreview() {
    SigninContent(onNavigateToProfile = {})
}