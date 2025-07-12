package com.example.shopm.screenCommon.loadingIcon

import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.material3.CircularProgressIndicator



@Composable
fun BasicLoading() {
    BasicLoadingContent()
}

@Composable
fun BasicLoadingContent() {
    CircularProgressIndicator()
}

@Preview(showBackground = true)
@Composable
fun BasicLoadingPreview() {
//    BasicLoadingContent()
}