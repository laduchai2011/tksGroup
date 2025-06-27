package com.example.shopm.screen.profile.component.menu


import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.Alignment
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.horizontalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.shopm.MainViewModel
import com.example.shopm.constant.ConstText


@Composable
fun MenuView(viewModel: MainViewModel = hiltViewModel()) {
    MenuViewContent(viewModel.user)
}

@Composable
fun MenuViewContent(user: String) {
    val items = listOf(
        ConstText.HOME,
        ConstText.PATIENT_RECORD,
        ConstText.BUY_HISTORY,
        ConstText.HOME,
        ConstText.PATIENT_RECORD,
        ConstText.BUY_HISTORY,
        ConstText.HOME,
        ConstText.PATIENT_RECORD,
        ConstText.BUY_HISTORY,
        user
    )
    val scrollState = rememberScrollState()

    Row(
        modifier = MenuStyle.parent
            .horizontalScroll(scrollState)
    ) {
        items.forEach { item ->
            val backGround = if (item == ConstText.HOME) Color.Gray else Color.White
            Box(
                modifier = Modifier
                    .wrapContentWidth()
                    .fillMaxHeight()
                    .background(backGround),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    item,
                    modifier = Modifier
                        .wrapContentWidth()
                        .padding(start = 5.dp, end = 5.dp)
                )
            }

        }

    }
}


@Preview(showBackground = true)
@Composable
fun MenuViewContentPreview() {
    val user = "la duc hai"
    MenuViewContent(user)
}