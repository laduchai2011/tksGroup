package com.example.shopm.viewModel

@HiltViewModel
class ProfileViewModel @Inject constructor(
    private val repository: ProfileRepository
) : ViewModel() {
    // sử dụng repository ở đây
}