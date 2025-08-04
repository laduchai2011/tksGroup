package com.example.shopm

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject


@HiltViewModel
class MainViewModel @Inject constructor(
    private val mainRepository: MainRepository
) : ViewModel() {

    var isSignin: Boolean by mutableStateOf(false)
        private set

    fun setIsSignin(): (isSignin: Boolean) -> Unit = {
        this.isSignin = isSignin
    }

}