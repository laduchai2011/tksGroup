package com.example.shopm.screen.signin


import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
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