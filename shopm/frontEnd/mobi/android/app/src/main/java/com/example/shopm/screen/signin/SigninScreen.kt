package com.example.shopm.screen.signin


import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
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
import com.example.shopm.component.header.TopHeaderScreen
import com.example.shopm.constant.ConstText
import com.example.shopm.dataStruct.AccountField
import com.example.shopm.dataStruct.ApiResult
import com.example.shopm.navigator.BottomScreenRoutes
import com.example.shopm.navigator.LocalScreenCommonViewModel
import com.example.shopm.navigator.OtherScreenRoutes
import com.example.shopm.navigator.localNavController
import com.example.shopm.screen.signup.SignupStyle
import com.example.shopm.type.ScreenCommonType
import com.example.shopm.type.SigninType
import com.example.shopm.utility.containsSpecialCharacters
import com.example.shopm.utility.isFirstNumber
import com.example.shopm.utility.isSpace
import com.example.shopm.viewModel.SigninViewModel
import java.time.OffsetDateTime


@Composable
fun SigninScreen(signinViewModel: SigninViewModel = hiltViewModel()) {
    SigninContent(signinViewModel)
}

@Composable
fun SigninContent(signinViewModel: SigninViewModel) {
    val screenCommonViewModel = LocalScreenCommonViewModel.current
    val navController = localNavController.current

    val setToastMessage = screenCommonViewModel.setToastMessage()
    val setLoadingIcon = screenCommonViewModel.setLoadingIcon()
    val closeScreenCommon = screenCommonViewModel.close()
    val signupResult by signinViewModel.signinResult.collectAsState()

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
                updateTime = OffsetDateTime.now()
            )
        )
    }

    val fieldStates = remember {
        mutableStateMapOf(
            SigninType.Option.ACCOUNT to TextFieldValue(accountOption.userName),
            SigninType.Option.PASSWORD to TextFieldValue(accountOption.password),
        )
    }

    LaunchedEffect(signupResult) {
        when (val result = signupResult) {
            is ApiResult.Success -> {
                closeScreenCommon()
                val data = result.data
                if (data.success) {
                    navController.navigate(BottomScreenRoutes.Home.toString())
                } else {
                    val type = ScreenCommonType.ToastMessageType.DIALOG
                    val fieldMessage = ScreenCommonType.FieldToastMessage(
                        message = data.message
                    )
                    setToastMessage(type, fieldMessage)
                }
            }

            is ApiResult.Error -> {
                closeScreenCommon()
                val data = result.message
                val type = ScreenCommonType.ToastMessageType.DIALOG
                val fieldMessage = ScreenCommonType.FieldToastMessage(
                    message = data
                )
                setToastMessage(type, fieldMessage)
            }

            else -> {}
        }
    }

    val isPassString = remember(setToastMessage) {
        fun(item: SigninType.Option, newText: TextFieldValue): Boolean {
            val type = ScreenCommonType.ToastMessageType.DIALOG
            var fieldMessage = ScreenCommonType.FieldToastMessage(
                message = ""
            )

            var isPass = true

            when (item.ordinal) {
                SigninType.Option.ACCOUNT.ordinal -> {
                    fieldMessage = if (isSpace(newText.text)) {
                        ScreenCommonType.FieldToastMessage(message = "(${SigninType.Option.ACCOUNT.title}) Không được có khoảng trắng !")
                    } else if (isFirstNumber(newText.text)) {
                        ScreenCommonType.FieldToastMessage(message = "(${SigninType.Option.ACCOUNT.title}) Ký tự đầu tiên không được là số !")
                    } else if (containsSpecialCharacters(newText.text)) {
                        ScreenCommonType.FieldToastMessage(message = "(${SigninType.Option.ACCOUNT.title}) Tên tài khoản không được chứa ký tự đặc biệt !")
                    } else {
                        ScreenCommonType.FieldToastMessage(message = "")
                    }
                }

                SigninType.Option.PASSWORD.ordinal -> {
                    fieldMessage = if (isSpace(newText.text)) {
                        ScreenCommonType.FieldToastMessage(message = "(${SigninType.Option.PASSWORD.title}) Không được có khoảng trắng !")
                    } else if (containsSpecialCharacters(newText.text)) {
                        ScreenCommonType.FieldToastMessage(message = "(${SigninType.Option.PASSWORD.title}) Mật khẩu không được chứa ký tự đặc biệt !")
                    } else {
                        ScreenCommonType.FieldToastMessage(message = "")
                    }
                }

                else -> println("handleChange (checkString)")
            }

            if (fieldMessage.message.isNotEmpty()) {
                setToastMessage(type, fieldMessage)
                isPass = false
            }

            return isPass
        }
    }

    val updateText = remember(accountOption) {
        fun(item: SigninType.Option, newText: TextFieldValue) {
            when (item) {
                SigninType.Option.ACCOUNT -> {
                    accountOption = accountOption.copy(userName = newText.text)
                    fieldStates[SigninType.Option.ACCOUNT] = newText
                }

                SigninType.Option.PASSWORD -> {
                    accountOption = accountOption.copy(password = newText.text)
                    fieldStates[SigninType.Option.PASSWORD] = newText
                }
            }
        }
    }

    val handleSignin = remember(accountOption, fieldStates) {
        fun() {
            for ((key, value) in fieldStates) {
                isPassString(key, value)
            }
            setLoadingIcon(ScreenCommonType.LoadingIconType.BASIC)
            signinViewModel.signin()(accountOption)
        }
    }

    fun goToSignup() {
        navController.navigate(OtherScreenRoutes.Signup.toString())
    }

    val items = listOf(
        SigninType.Option.ACCOUNT,
        SigninType.Option.PASSWORD,
    )

    Column(
        modifier = SigninStyle.parent,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TopHeaderScreen()
        items.forEach { item ->
            val maxLen = SigninType.MaxLen.entries[item.ordinal]
            val fieldValue = fieldStates[item] ?: TextFieldValue("")
            Row(modifier = SigninStyle.row, verticalAlignment = Alignment.CenterVertically) {
                Text(item.title, modifier = SignupStyle.title)
                TextField(
                    value = fieldValue,
                    modifier = SigninStyle.input,
                    onValueChange = { newText -> updateText(item, newText) },
                    label = { Text("Tối đa ${maxLen.value} ký tự") }
                )
            }
        }
        Row(modifier = SigninStyle.row, verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = SigninStyle.signinBtn.clickable { handleSignin() },
                contentAlignment = Alignment.Center
            ) {
                Text(ConstText.SIGNIN, fontSize = 18.sp)
            }
        }
        Row(
            modifier = SigninStyle.row, verticalAlignment = Alignment.CenterVertically
        ) {
            Box(modifier = SigninStyle.signupBtn.clickable { goToSignup() }) {
                Text("${ConstText.SIGNUP} ?", fontSize = 14.sp, color = Color.Blue)
            }
        }
    }

}

@Preview(showBackground = true)
@Composable
fun SigninContentPreview() {
//    SigninContent()
}