package com.example.shopm.screen.profile.component.menu


import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
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
import com.example.shopm.type.ProfileType
import com.example.shopm.viewModel.ProfileViewModel


@Composable
fun MenuView(profileViewModel: ProfileViewModel = hiltViewModel()) {
    MenuViewContent(profileViewModel)
}

@Composable
fun MenuViewContent(profileViewModel: ProfileViewModel) {
    val menuSelected: ProfileType.Menu = profileViewModel.menuSelected
    val setMenuSelected = profileViewModel.setMenuSelected()

    val selectedColor = Color(0xFFe7e7e7)

    val items = listOf(
        ProfileType.Menu.HOME,
        ProfileType.Menu.PATIENT_RECORD,
        ProfileType.Menu.BUY_HISTORY
    )
    val scrollState = rememberScrollState()

    fun onMenuSelected(item: ProfileType.Menu) {
        setMenuSelected(item)
    }

    Row(
        modifier = MenuStyle.parent
            .horizontalScroll(scrollState)
    ) {
        items.forEach { item ->
            val backGround = if (item == menuSelected) selectedColor else Color.White
            Box(
                modifier = Modifier
                    .wrapContentWidth()
                    .fillMaxHeight()
                    .background(backGround)
                    .border(0.1.dp, Color.Gray)
                    .clickable { onMenuSelected(item) },
                contentAlignment = Alignment.Center
            ) {
                Text(
                    item.title,
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
//    val user = "la duc hai"
//    MenuViewContent(user)
}