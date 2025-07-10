package com.example.shopm.viewModel

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import com.example.shopm.type.ToastMessageType

@HiltViewModel
class ToastMessageViewModel @Inject constructor() : ViewModel() {

    var toastMessageField by mutableStateOf(ToastMessageType.Field(isShow = false, message = ""))
        private set

    fun setToastMessageField(): (ToastMessageType.Field) -> Unit = { toastMessageField ->
        this.toastMessageField = toastMessageField
    }
}