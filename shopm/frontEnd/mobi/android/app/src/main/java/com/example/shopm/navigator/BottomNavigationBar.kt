package com.example.shopm.navigator

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.currentBackStackEntryAsState

@Composable
fun BottomNavigationBar(navController: NavHostController) {
    val items = listOf(
        BottomScreenRoutes.Home,
        BottomScreenRoutes.Setting,
        BottomScreenRoutes.Profile
    )
    val currentDestination = navController.currentBackStackEntryAsState().value?.destination?.route

    NavigationBar {
        items.forEach { screen ->
            val icon = when (screen) {
                is BottomScreenRoutes.Home -> Icons.Default.Home
                is BottomScreenRoutes.Setting -> Icons.Default.Settings
                is BottomScreenRoutes.Profile -> Icons.Default.Person
            }

            NavigationBarItem(
                icon = { Icon(icon, contentDescription = screen.title) },
                label = { Text(screen.title) },
                selected = currentDestination == screen.route,
                onClick = {
                    if (currentDestination != screen.route) {
                        navController.navigate(screen.route) {
                            popUpTo(navController.graph.startDestinationId) { saveState = true }
                            launchSingleTop = true
                            restoreState = true
                        }
                    }
                }
            )
        }
    }
}