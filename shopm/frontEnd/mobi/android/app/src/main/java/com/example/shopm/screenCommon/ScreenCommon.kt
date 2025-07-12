package com.example.shopm.screenCommon


//import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.tooling.preview.Preview
import com.example.shopm.navigator.LocalScreenCommonViewModel
import com.example.shopm.screenCommon.toastMessage.MessageDialog
import com.example.shopm.screenCommon.loadingIcon.BasicLoading
import com.example.shopm.type.ScreenCommonType


@Composable
fun ScreenCommon() {
    ScreenCommonContent()
}

@Composable
fun ScreenCommonContent() {
    val screenCommonViewModel = LocalScreenCommonViewModel.current
    val isShow: Boolean = screenCommonViewModel.isShow
    val selectedOption = screenCommonViewModel.selectedOption

    val toastMessageType = screenCommonViewModel.toastMessageType

    val loadingIconType = screenCommonViewModel.loadingIconType

//    val offsetX by animateDpAsState(
//
//    )

    Box(
        modifier = ScreenCommonStyle.parent.then(ScreenCommonStyle.parentOffsetAnimate(isShow)),
        contentAlignment = Alignment.Center
    ) {
        if (selectedOption == ScreenCommonType.Option.TOAST_MESSAGE) {
            if (toastMessageType == ScreenCommonType.ToastMessageType.DIALOG) {
                MessageDialog()
            }

        }
        if (selectedOption == ScreenCommonType.Option.LOADING_ICON) {
            if (loadingIconType == ScreenCommonType.LoadingIconType.BASIC) {
                BasicLoading()
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun ScreenCommonPreview() {
//    ScreenCommonContent()
}