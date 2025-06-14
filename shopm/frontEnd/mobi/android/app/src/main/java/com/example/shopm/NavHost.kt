package com.example.shopm

import androidx.compose.runtime.Composable
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import com.example.shopm.screen.ProfileScreen
import com.example.shopm.screen.SettingsScreen


@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "profile") {
        composable("profile") { ProfileScreen(navController) }
        composable("settings") { SettingsScreen(navController) }
    }
}