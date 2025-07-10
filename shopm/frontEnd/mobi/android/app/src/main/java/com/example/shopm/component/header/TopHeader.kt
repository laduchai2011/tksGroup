package com.example.shopm.component.header


import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBackIosNew
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import com.example.shopm.navigator.localNavController


@Composable
fun TopHeaderScreen() {
    TopHeaderContent()
}


@Composable
fun TopHeaderContent() {
    val navController = localNavController.current

    fun handleBack() {
        navController.popBackStack()
    }

    Row(modifier = TopHeaderStyle.parent, verticalAlignment = Alignment.CenterVertically) {
        Icon(
            modifier = TopHeaderStyle.icon.clickable{ handleBack() },
            imageVector = Icons.Filled.ArrowBackIosNew,
            contentDescription = "ArrowBackIosNew",
            tint = Color.Black
        )
    }
}

@Preview(showBackground = true)
@Composable
fun TopHeaderContentPreview() {

}