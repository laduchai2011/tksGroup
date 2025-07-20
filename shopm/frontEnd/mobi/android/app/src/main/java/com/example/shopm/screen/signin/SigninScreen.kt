package com.example.shopm.screen.signin


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
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import com.example.shopm.component.header.TopHeaderScreen
import com.example.shopm.constant.ConstText
import com.example.shopm.dataStruct.AccountField
import com.example.shopm.navigator.OtherScreenRoutes
import com.example.shopm.navigator.localNavController
import com.example.shopm.screen.signup.SignupStyle
import com.example.shopm.type.SigninType
import java.time.OffsetDateTime


@Composable
fun SigninScreen() {
    SigninContent()
}

@Composable
fun SigninContent() {
    val navController = localNavController.current

    val accountOption by remember {
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

    fun goToSignup () {
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
                    onValueChange = {  },
                    label = { Text("Tối đa ${maxLen.value} ký tự") }
                )
            }
        }
        Row(modifier = SigninStyle.row, verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = SigninStyle.signinBtn.clickable {  },
                contentAlignment = Alignment.Center
            ) {
                Text(ConstText.SIGNIN, fontSize = 18.sp)
            }
        }
        Row(
            modifier = SigninStyle.row, verticalAlignment = Alignment.CenterVertically
        ) {
            Box (modifier = SigninStyle.signupBtn.clickable { goToSignup() }) {
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