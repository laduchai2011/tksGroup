package com.example.shopm.navigator

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import com.example.shopm.screen.profile.ProfileScreen
import com.example.shopm.screen.SettingsScreen


@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    Scaffold(
        bottomBar = {
            BottomNavigationBar(navController)
        }
    ) { paddingValues ->
        NavHost(
            navController = navController,
            startDestination = "profile",
            modifier = Modifier.padding(paddingValues))
        {
            composable(ScreenRoutes.Profile.toString()) { ProfileScreen() }
            composable(ScreenRoutes.Settings.toString()) { SettingsScreen(navController) }
        }
    }
}