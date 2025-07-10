package com.example.shopm.screen.signup


import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.shopm.type.SignupType
import com.example.shopm.component.header.TopHeaderScreen
import com.example.shopm.dataType.AccountOption
import com.example.shopm.constant.ConstText
import com.example.shopm.navigator.LocalScreenCommonViewModel
import com.example.shopm.viewModel.ScreenCommonViewModel


@Composable
fun SignupScreen() {
    SignupContent()
}

@Composable
fun SignupContent() {
//    var text by remember { mutableStateOf(TextFieldValue("")) }
    val screenCommonViewModel = LocalScreenCommonViewModel.current

    val setIsShow = screenCommonViewModel.setIsShow()


    var accountOption by remember {
        mutableStateOf(
            AccountOption(
                id = null,
                userName = "",
                password = "",
                phone = "",
                firstName = "",
                lastName = "",
                avatar = null,
                status = "",
                updateTime = ""
            )
        )
    }

    val fieldStates = remember {
        mutableStateMapOf(
            SignupType.Option.ACCOUNT.ordinal to TextFieldValue(accountOption.userName),
            SignupType.Option.PASSWORD.ordinal to TextFieldValue(accountOption.password),
            SignupType.Option.PHONE_NUMBER.ordinal to TextFieldValue(accountOption.phone),
            SignupType.Option.FIRST_NAME.ordinal to TextFieldValue(accountOption.firstName),
            SignupType.Option.LAST_NAME.ordinal to TextFieldValue(accountOption.lastName),
        )
    }

    val items = listOf(
        SignupType.Option.ACCOUNT,
        SignupType.Option.PASSWORD,
        SignupType.Option.PHONE_NUMBER,
        SignupType.Option.FIRST_NAME,
        SignupType.Option.LAST_NAME
    )

    fun updateText(item: SignupType.Option, newText: TextFieldValue) {
        when (item.ordinal) {
            SignupType.Option.ACCOUNT.ordinal -> {
                accountOption = accountOption.copy(userName = newText.text)
                fieldStates[SignupType.Option.ACCOUNT.ordinal] = newText
            }

            SignupType.Option.PASSWORD.ordinal -> {
                accountOption = accountOption.copy(password = newText.text)
                fieldStates[SignupType.Option.PASSWORD.ordinal] = newText
            }

            SignupType.Option.PHONE_NUMBER.ordinal -> {
                accountOption = accountOption.copy(phone = newText.text)
                fieldStates[SignupType.Option.PHONE_NUMBER.ordinal] = newText
            }

            SignupType.Option.FIRST_NAME.ordinal -> {
                accountOption = accountOption.copy(firstName = newText.text)
                fieldStates[SignupType.Option.FIRST_NAME.ordinal] = newText
            }

            SignupType.Option.LAST_NAME.ordinal -> {
                accountOption = accountOption.copy(lastName = newText.text)
                fieldStates[SignupType.Option.LAST_NAME.ordinal] = newText
            }

            else -> println("handleChange")
        }
    }

    fun handleSignup() {
        setIsShow(true)
    }

    Column(
        modifier = SignupStyle.parent,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TopHeaderScreen()
        items.forEach { item ->
            val maxLen = SignupType.MaxLen.entries[item.ordinal]
            val fieldValue = fieldStates[item.ordinal] ?: TextFieldValue("")
            Row(modifier = SignupStyle.row, verticalAlignment = Alignment.CenterVertically) {
                Text(item.title, modifier = SignupStyle.title)
                TextField(
                    value = fieldValue,
                    modifier = SignupStyle.input,
                    onValueChange = { newText -> updateText(item, newText) },
                    label = { Text("Tối đa ${maxLen.value} ký tự") }
                )
            }
        }
        Row(modifier = SignupStyle.row, verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = SignupStyle.signupBtn.clickable { handleSignup() },
                contentAlignment = Alignment.Center
            ) {
                Text(ConstText.SIGNUP, fontSize = 18.sp)
            }
        }
        Row(modifier = SignupStyle.row, verticalAlignment = Alignment.CenterVertically) {
            Text("${ConstText.SIGNIN} ?", fontSize = 14.sp, color = Color.Blue)
        }
    }

}

@Preview(showBackground = true)
@Composable
fun SignupContentPreview() {
//    SignupContent()
}