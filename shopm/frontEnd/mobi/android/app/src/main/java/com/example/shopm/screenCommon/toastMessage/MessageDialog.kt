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
import androidx.compose.material3.IconButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.Modifier
import com.example.shopm.navigator.LocalScreenCommonViewModel


@Composable
fun MessageDialog() {
    MessageDialogContent()
}

@Composable
fun MessageDialogContent() {
    val screenCommonViewModel = LocalScreenCommonViewModel.current
    val message: String = screenCommonViewModel.fieldToastMessage.message
    val close = screenCommonViewModel.close()

    fun handleClose() {
        close()
    }

    Box(
        modifier = MessageDialogStyle.parent,
    ) {
        Column(
            modifier = MessageDialogStyle.mainFrame,
        ) {
            Row {
                Spacer(modifier = Modifier.weight(1f))
//                Icon(
//                    imageVector = Icons.Filled.Close,
//                    contentDescription = "Close",
//                    tint = Color.Black
//                )
                IconButton(onClick = { handleClose() }) {
                    Icon(
                        imageVector = Icons.Filled.Close,
                        contentDescription = "Close",
                        tint = Color.Black
                    )
                }
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
fun MessageDialogPreview() {
//    MessageDialogContent()
}