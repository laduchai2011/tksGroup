package com.example.shopm.viewModel

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import com.example.shopm.type.ScreenCommonType
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

@HiltViewModel
class ScreenCommonViewModel @Inject constructor() : ViewModel() {
    var isShow: Boolean by mutableStateOf(false)
        private set
    fun close(): () -> Unit = { ->
        this.isShow = false
    }

    var selectedOption: ScreenCommonType.Option by mutableStateOf(ScreenCommonType.Option.TOAST_MESSAGE)
        private set

    var toastMessageType: ScreenCommonType.ToastMessageType by mutableStateOf(ScreenCommonType.ToastMessageType.DIALOG)
        private set
    var fieldToastMessage: ScreenCommonType.FieldToastMessage by mutableStateOf(
        ScreenCommonType.FieldToastMessage(
            message = ""
        )
    )
        private set

    var loadingIconType: ScreenCommonType.LoadingIconType by mutableStateOf(ScreenCommonType.LoadingIconType.BASIC)



    fun setToastMessage(): (type: ScreenCommonType.ToastMessageType, fieldMessage: ScreenCommonType.FieldToastMessage) -> Unit =
        { type, fieldMessage ->
            this.selectedOption = ScreenCommonType.Option.TOAST_MESSAGE
            this.toastMessageType = type
            this.fieldToastMessage = fieldMessage

            this.isShow = true
        }

    fun setLoadingIcon(): (type: ScreenCommonType.LoadingIconType) -> Unit =
        {
            type ->
            this.selectedOption = ScreenCommonType.Option.LOADING_ICON
            this.loadingIconType = type

            this.isShow = true
        }
}