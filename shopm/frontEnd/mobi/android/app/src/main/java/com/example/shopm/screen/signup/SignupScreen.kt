package com.example.shopm.screen.signup


import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import com.example.shopm.type.SignupType


@Composable
fun SignupScreen() {
    SignupContent()
}

@Composable
fun SignupContent() {
    var text by remember { mutableStateOf(TextFieldValue("")) }

    val items = listOf(
        SignupType.Option.ACCOUNT,
        SignupType.Option.PASSWORD,
        SignupType.Option.PHONE_NUMBER,
        SignupType.Option.FIRST_NAME,
        SignupType.Option.LAST_NAME
    )

    Column(
        modifier = SignupStyle.parent,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row(modifier = SignupStyle.header, verticalAlignment = Alignment.CenterVertically) {}
        items.forEach { item ->
            val maxLen = SignupType.MaxLen.entries[item.ordinal]
            Row(modifier = SignupStyle.row, verticalAlignment = Alignment.CenterVertically) {
                Text(item.title, modifier = SignupStyle.title)
                TextField(
                    value = text,
                    modifier = SignupStyle.input,
                    onValueChange = { newText -> text = newText },
                    label = { Text("Tối đa ${maxLen.value} ký tự") }
                )
            }
        }
    }

}

@Preview(showBackground = true)
@Composable
fun SignupContentPreview() {
    SignupContent()
}