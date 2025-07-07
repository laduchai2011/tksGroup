package com.example.shopm.navigator

import androidx.compose.runtime.CompositionLocalProvider
//import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import com.example.shopm.screen.profile.ProfileScreen
import com.example.shopm.screen.setting.SettingScreen
import com.example.shopm.screen.signup.SignupScreen
import com.example.shopm.screen.signin.SigninScreen

val localNavController = staticCompositionLocalOf<NavHostController> {
    error("NavController not provided")
}

@Composable
fun AppNavigation() {
    val navController = rememberNavController()

    Scaffold(
        bottomBar = {
            BottomNavigationBar(navController)
        }
    ) { paddingValues ->
        CompositionLocalProvider(localNavController provides navController) {
            NavHost(
                navController = navController,
                startDestination = "profile",
                modifier = Modifier.padding(paddingValues))
            {
                composable(BottomScreenRoutes.Setting.toString()) { SettingScreen() }
                composable(BottomScreenRoutes.Profile.toString()) { ProfileScreen() }

                composable(OtherScreenRoutes.Signup.toString()) { SignupScreen() }
                composable(OtherScreenRoutes.Signin.toString()) { SigninScreen() }
            }
        }

    }
}