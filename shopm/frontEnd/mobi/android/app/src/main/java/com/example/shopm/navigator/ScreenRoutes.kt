package com.example.shopm.navigator

sealed class BottomScreenRoutes(val route: String, val title: String) {
    //    data object Home : ScreenRoutes("home", "Home")
    data object Profile : BottomScreenRoutes("profile", "Profile")
    data object Setting : BottomScreenRoutes("setting", "Setting")
//    data object Signup : ScreenRoutes("signup", "Signup")
}

sealed class OtherScreenRoutes(val route: String, val title: String) {
    data object Signup : OtherScreenRoutes("signup", "Signup")
    data object Signin : OtherScreenRoutes("signin", "Signin")
}