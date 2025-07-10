package com.example.shopm.screenCommon.toastMessage


import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.material3.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.Modifier
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.shopm.viewModel.ToastMessageViewModel


@Composable
fun MessageDialog(toastMessageViewModel: ToastMessageViewModel = hiltViewModel()) {
    MessageDialogContent(toastMessageViewModel)
}

@Composable
fun MessageDialogContent(toastMessageViewModel: ToastMessageViewModel) {
    val message: String = toastMessageViewModel.toastMessageField.message

    Box(
        modifier = MessageDialogStyle.parent,
    ) {
        Column(
            modifier = MessageDialogStyle.mainFrame,
        ) {
            Row {
                Spacer(modifier = Modifier.weight(1f))
                Icon(
                    imageVector = Icons.Filled.Close,
                    contentDescription = "Close",
                    tint = Color.Black
                )
            }
            Row(
                modifier = MessageDialogStyle.content,
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(message)
            }
        }

    }
}

@Preview(showBackground = true)
@Composable
fun ScreenCommonPreview() {
//    MessageDialogContent()
}