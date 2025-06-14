package com.example.shopm.screen

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavController

//@Composable
//fun SettingsScreen(navController: NavController) {
//    Column {
//        Text("This is the Settings Screen")
//        Button(onClick = { navController.popBackStack() }) {
//            Text("Back to Profile")
//        }
//    }
//}

@Composable
fun SettingsScreen(navController: NavController) {
    SettingsContent(onNavigateToProfile = {
        navController.navigate("profile")
    })
}

@Composable
fun SettingsContent(onNavigateToProfile: () -> Unit) {
    Column {
        Text("This is the Settings Screen")
        Button(onClick = onNavigateToProfile) {
            Text("Go to Profile")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun SettingsContentPreview() {
    SettingsContent(onNavigateToProfile = {}) // Truyền function rỗng cho preview
}