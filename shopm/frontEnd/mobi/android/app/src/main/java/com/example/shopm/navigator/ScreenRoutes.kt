package com.example.shopm.navigator

sealed class ScreenRoutes(val route: String, val title: String) {
//    data object Home : ScreenRoutes("home", "Home")
    data object Profile : ScreenRoutes("profile", "Profile")
    data object Settings : ScreenRoutes("settings", "Settings")
}