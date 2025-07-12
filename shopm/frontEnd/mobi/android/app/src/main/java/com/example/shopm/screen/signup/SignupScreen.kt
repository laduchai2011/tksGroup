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
import com.example.shopm.type.SignupType
import com.example.shopm.component.header.TopHeaderScreen
import com.example.shopm.dataType.AccountField
import com.example.shopm.constant.ConstText
import com.example.shopm.navigator.LocalScreenCommonViewModel
import com.example.shopm.type.ScreenCommonType
import com.example.shopm.utility.containsSpecialCharacters
import com.example.shopm.utility.isFirstNumber
import com.example.shopm.utility.isSpace
import com.example.shopm.utility.isValidPhoneNumber


@Composable
fun SignupScreen() {
    SignupContent()
}

@Composable
fun SignupContent() {
    val screenCommonViewModel = LocalScreenCommonViewModel.current

    val setToastMessage = screenCommonViewModel.setToastMessage()
    val setLoadingIcon = screenCommonViewModel.setLoadingIcon()


    var accountOption by remember {
        mutableStateOf(
            AccountField(
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
            SignupType.Option.ACCOUNT to TextFieldValue(accountOption.userName),
            SignupType.Option.PASSWORD to TextFieldValue(accountOption.password),
            SignupType.Option.PHONE_NUMBER to TextFieldValue(accountOption.phone),
            SignupType.Option.FIRST_NAME to TextFieldValue(accountOption.firstName),
            SignupType.Option.LAST_NAME to TextFieldValue(accountOption.lastName),
        )
    }

    val items = listOf(
        SignupType.Option.ACCOUNT,
        SignupType.Option.PASSWORD,
        SignupType.Option.PHONE_NUMBER,
        SignupType.Option.FIRST_NAME,
        SignupType.Option.LAST_NAME
    )

    fun isPassString(item: SignupType.Option, newText: TextFieldValue): Boolean {
        val type = ScreenCommonType.ToastMessageType.DIALOG
        var fieldMessage = ScreenCommonType.FieldToastMessage(
            message = ""
        )

        var isPsss = true

        when (item.ordinal) {
            SignupType.Option.ACCOUNT.ordinal -> {
                fieldMessage = if (isSpace(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.ACCOUNT.title}) Không được có khoảng trắng !")
                } else if (isFirstNumber(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.ACCOUNT.title}) Ký tự đầu tiên không được là số !")
                } else if (containsSpecialCharacters(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.ACCOUNT.title}) Tên tài khoản không được chứa ký tự đặc biệt !")
                } else {
                    ScreenCommonType.FieldToastMessage(message = "")
                }
            }

            SignupType.Option.PASSWORD.ordinal -> {
                fieldMessage = if (isSpace(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.PASSWORD.title}) Không được có khoảng trắng !")
                } else if (containsSpecialCharacters(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.PASSWORD.title}) Mật khẩu không được chứa ký tự đặc biệt !")
                } else {
                    ScreenCommonType.FieldToastMessage(message = "")
                }
            }

            SignupType.Option.PHONE_NUMBER.ordinal -> {
                fieldMessage = when {
                    isSpace(newText.text) -> {
                        ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.PHONE_NUMBER.title}) Không được có khoảng trắng !")
                    }
                    containsSpecialCharacters(newText.text) -> {
                        ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.PHONE_NUMBER.title}) Số điện thoại không được chứa ký tự đặc biệt !")
                    }
                    !isValidPhoneNumber(newText.text) -> {
                        ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.PHONE_NUMBER.title}) Không phải là số điện thoại !")
                    }
                    else -> {
                        ScreenCommonType.FieldToastMessage(message = "")
                    }
                }
            }

            SignupType.Option.FIRST_NAME.ordinal -> {
                fieldMessage = if (containsSpecialCharacters(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.FIRST_NAME.title}) Tên không được chứa ký tự đặc biệt !")
                } else {
                    ScreenCommonType.FieldToastMessage(message = "")
                }
            }

            SignupType.Option.LAST_NAME.ordinal -> {
                fieldMessage = if (containsSpecialCharacters(newText.text)) {
                    ScreenCommonType.FieldToastMessage(message = "(${SignupType.Option.LAST_NAME.title}) Tên không được chứa ký tự đặc biệt !")
                } else {
                    ScreenCommonType.FieldToastMessage(message = "")
                }
            }

            else -> println("handleChange (checkString)")
        }

        if (fieldMessage.message.isNotEmpty()) {
            setToastMessage(type, fieldMessage)
            isPsss = false
        }

        return isPsss
    }

    fun updateText(item: SignupType.Option, newText: TextFieldValue) {
        when (item) {
            SignupType.Option.ACCOUNT -> {
                accountOption = accountOption.copy(userName = newText.text)
                fieldStates[SignupType.Option.ACCOUNT] = newText
            }
            SignupType.Option.PASSWORD -> {
                accountOption = accountOption.copy(password = newText.text)
                fieldStates[SignupType.Option.PASSWORD] = newText
            }
            SignupType.Option.PHONE_NUMBER -> {
                accountOption = accountOption.copy(phone = newText.text)
                fieldStates[SignupType.Option.PHONE_NUMBER] = newText
            }
            SignupType.Option.FIRST_NAME -> {
                accountOption = accountOption.copy(firstName = newText.text)
                fieldStates[SignupType.Option.FIRST_NAME] = newText
            }
            SignupType.Option.LAST_NAME -> {
                accountOption = accountOption.copy(lastName = newText.text)
                fieldStates[SignupType.Option.LAST_NAME] = newText
            }
        }

    }

    fun handleSignup() {
        for ((key, value) in fieldStates) {
            isPassString(key, value)
        }
//        setLoadingIcon(ScreenCommonType.LoadingIconType.BASIC)
    }

    Column(
        modifier = SignupStyle.parent,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TopHeaderScreen()
        items.forEach { item ->
            val maxLen = SignupType.MaxLen.entries[item.ordinal]
            val fieldValue = fieldStates[item] ?: TextFieldValue("")
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