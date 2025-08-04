package com.example.shopm.navigator

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import com.example.shopm.MainViewModel
import com.example.shopm.screen.home.HomeScreen
import com.example.shopm.screen.profile.ProfileScreen
import com.example.shopm.screen.setting.SettingScreen
import com.example.shopm.screen.signup.SignupScreen
import com.example.shopm.screen.signin.SigninScreen
import com.example.shopm.screenCommon.ScreenCommon
import com.example.shopm.viewModel.ScreenCommonViewModel

val localNavController = staticCompositionLocalOf<NavHostController> {
    error("NavController not provided")
}
val LocalScreenCommonViewModel = staticCompositionLocalOf<ScreenCommonViewModel> {
    error("ScreenCommonViewModel not provided")
}


@Composable
fun AppNavigation(modifier: Modifier = Modifier) {
    val navController = localNavController.current

    NavHost(
        navController = navController,
        startDestination = "profile",
        modifier = modifier
    ) {
        composable(BottomScreenRoutes.Home.toString()) { HomeScreen() }
        composable(BottomScreenRoutes.Setting.toString()) { SettingScreen() }
        composable(BottomScreenRoutes.Profile.toString()) { ProfileScreen() }

        composable(OtherScreenRoutes.Signup.toString()) { SignupScreen() }
        composable(OtherScreenRoutes.Signin.toString()) { SigninScreen() }
    }

}

@Composable
fun AppContainer() {
    val navController = rememberNavController()
    val screenCommonViewModel: ScreenCommonViewModel = hiltViewModel()


    CompositionLocalProvider(
        localNavController provides navController,
        LocalScreenCommonViewModel provides screenCommonViewModel
    ) {
        Scaffold(
            bottomBar = {
                BottomNavigationBar(navController)
            },
        ) { paddingValues ->
            Box(modifier = Modifier.fillMaxSize()) {
                AppNavigation(modifier = Modifier.padding(paddingValues))

                // common component
                ScreenCommon()
            }
        }
    }
}
