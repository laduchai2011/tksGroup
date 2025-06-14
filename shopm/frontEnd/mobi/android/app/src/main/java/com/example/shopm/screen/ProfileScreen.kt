package com.example.shopm.screen

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavController

//@Preview(showBackground = true)
//@Composable
//fun ProfileScreen(navController: NavController) {
//    Column {
//        Text("This is the Profile Screen")
//        Button(onClick = { navController.navigate("settings") }) {
//            Text("Go to Settings")
//        }
//    }
//}

@Composable
fun ProfileScreen(navController: NavController) {
    ProfileContent(onNavigateToSettings = {
        navController.navigate("settings")
    })
}

@Composable
fun ProfileContent(onNavigateToSettings: () -> Unit) {
    Column(
        Modifier
            .fillMaxWidth()
            .fillMaxHeight()
    ) {
        Text("This is the Profile Screen")
        Button(
            onClick = onNavigateToSettings, Modifier
                .fillMaxWidth()
                .fillMaxHeight()
        ) {
            Text("Go to Settings")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun ProfileContentPreview() {
    ProfileContent(onNavigateToSettings = {})
}