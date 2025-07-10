package com.example.shopm.screenCommon

import android.app.Activity
import android.util.Log
import androidx.activity.compose.LocalActivity
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.tooling.preview.Preview
//import androidx.hilt.navigation.compose.hiltViewModel
import com.example.shopm.navigator.LocalScreenCommonViewModel
//import com.example.shopm.navigator.localNavController
import com.example.shopm.screenCommon.toastMessage.MessageDialog
//import com.example.shopm.viewModel.ScreenCommonViewModel

// screenCommonViewModel: ScreenCommonViewModel = hiltViewModel(LocalActivity.current)
@Composable
fun ScreenCommon() {
    ScreenCommonContent()
}

@Composable
fun ScreenCommonContent() {
    val screenCommonViewModel = LocalScreenCommonViewModel.current
    val isShow: Boolean = screenCommonViewModel.isShow

    Log.e("ScreenCommonContent, isShow", isShow.toString() )

    Box(
        modifier = ScreenCommonStyle.parent(isShow),
        contentAlignment = Alignment.Center
    ) {
        MessageDialog()
    }
}

@Preview(showBackground = true)
@Composable
fun ScreenCommonPreview() {
//    ScreenCommonContent()
}