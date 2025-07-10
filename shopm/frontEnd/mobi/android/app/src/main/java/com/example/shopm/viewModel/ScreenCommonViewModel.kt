package com.example.shopm.viewModel

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class ScreenCommonViewModel @Inject constructor() : ViewModel() {

    var isShow: Boolean by mutableStateOf(false)
        private set

    fun setIsShow(): (Boolean) -> Unit = { isShow ->
        this.isShow = isShow
    }
}