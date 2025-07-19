package com.example.shopm.viewModel

//import androidx.compose.runtime.mutableStateOf
//import androidx.compose.runtime.getValue
//import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.shopm.dataStruct.AccountField
import com.example.shopm.dataStruct.ApiResult
import com.example.shopm.dataStruct.ResponseField
import com.example.shopm.repository.AccountRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject
//import com.example.shopm.type.ProfileType
import kotlinx.coroutines.launch

@HiltViewModel
class SignupViewModel @Inject constructor(
    private val accountRepository: AccountRepository
) : ViewModel() {
//    var menuSelected: ProfileType.Menu by mutableStateOf(ProfileType.Menu.HOME)
//        private set
//
//    fun setMenuSelected(): (ProfileType.Menu) -> Unit = { menu ->
//        this.menuSelected = menu
//    }

//    var signupResult by mutableStateOf<ApiResult<ResponseField<AccountField>>?>(null)
//        private set

    private val _signupResult = MutableStateFlow<ApiResult<ResponseField<AccountField>>?>(null)
    val signupResult: StateFlow<ApiResult<ResponseField<AccountField>>?> = _signupResult.asStateFlow()

    fun signupToDb(): (account: AccountField) -> Unit = { account ->
        _signupResult.value = null
        viewModelScope.launch {
            _signupResult.value = when (val result = accountRepository.signupToDB(account)) {
                is ApiResult.Success -> ApiResult.Success(result.data)
                is ApiResult.Error -> ApiResult.Error(result.message)
            }
        }

    }
}