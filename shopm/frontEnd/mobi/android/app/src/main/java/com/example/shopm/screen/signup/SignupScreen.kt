package com.example.shopm.screen.signup

import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.LocalIndication
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
import androidx.compose.ui.unit.sp
import com.example.shopm.navigator.localNavController




@Composable
fun SignupScreen() {
    SignupContent()
}

@Composable
fun SignupContent() {
    var text by remember { mutableStateOf(TextFieldValue("")) }

    Column {
        Row (verticalAlignment = Alignment.CenterVertically){
            Text("username")
            TextField(value=text, onValueChange = { newText -> text = newText },)
        }
        Row (verticalAlignment = Alignment.CenterVertically){
            Text("username")
            TextField(value=text, onValueChange = { newText -> text = newText },)
        }
        Row (verticalAlignment = Alignment.CenterVertically){
            Text("username")
            TextField(value=text, onValueChange = { newText -> text = newText },)
        }
    }

}

@Preview(showBackground = true)
@Composable
fun SignupContentPreview() {
    SignupContent()
}