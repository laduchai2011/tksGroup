package com.example.shopm.constant
import com.example.shopm.BuildConfig

const val BASEURL_DEVELOP = "http://192.168.5.100:6000"
const val BASEURL_PRODUCT = "http://192.168.5.100:6001"

object AccountURL {

    private const val DEVELOP = "$BASEURL_DEVELOP/account"
    private const val PRODUCT = "$BASEURL_PRODUCT/account1"

    fun signupUrl(): String {
        if (BuildConfig.DEV_MODE) {
            return "$DEVELOP/signup"
        }
        return "$PRODUCT/signup"
    }
}