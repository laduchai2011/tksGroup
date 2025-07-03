package com.example.shopm.viewModel

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import com.example.shopm.repository.ProfileRepository
import com.example.shopm.type.ProfileType

@HiltViewModel
class ProfileViewModel @Inject constructor(
    private val repository: ProfileRepository
) : ViewModel() {
    var menuSelected: ProfileType.Menu by mutableStateOf(ProfileType.Menu.HOME)
        private set

    fun setMenuSelected(): (ProfileType.Menu) -> Unit = { menu ->
        this.menuSelected = menu
    }
}