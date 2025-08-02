package com.example.shopm.viewModel


import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.shopm.dataStruct.AccountField
import com.example.shopm.dataStruct.ApiResult
import com.example.shopm.dataStruct.ResponseField
import com.example.shopm.dataStruct.TokenAuthStatus
import com.example.shopm.repository.AccountRepository
import com.example.shopm.token.Token
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.StateFlow
import javax.inject.Inject
import kotlinx.coroutines.launch

@HiltViewModel
class SigninViewModel @Inject constructor(
    private val accountRepository: AccountRepository,
    private val token: Token
) : ViewModel() {

    private val _signinResult = MutableStateFlow<ApiResult<ResponseField<AccountField>>?>(null)
    val signinResult: StateFlow<ApiResult<ResponseField<AccountField>>?> = _signinResult.asStateFlow()

    fun signin(): (account: AccountField) -> Unit = { account ->
        _signinResult.value = null
        viewModelScope.launch {
//            _signinResult.value = when (val result = accountRepository.signin(account)) {
//                is ApiResult.Success -> ApiResult.Success(result.data)
//                is ApiResult.Error -> ApiResult.Error(result.message)
//            }
            when (val result = accountRepository.signin(account)) {
                is ApiResult.Success -> {
                    val data = result.data
                    val accessToken = data.tokenAuth?.accessToken
                    val refreshToken = data.tokenAuth?.refreshToken
                    if (data.tokenAuth?.status==TokenAuthStatus.SIGNIN) {
                        if (accessToken != null) {
                            token.storeAccessToken(accessToken)
                        }
                        if (refreshToken != null) {
                            token.storeRefreshToken(refreshToken)
                        }
                    }
                    _signinResult.value = ApiResult.Success(result.data)
                }

                is ApiResult.Error -> {
                    _signinResult.value = ApiResult.Error(result.message)
                }

                else -> println("SigninViewModel -> signin")
            }
        }

    }
}