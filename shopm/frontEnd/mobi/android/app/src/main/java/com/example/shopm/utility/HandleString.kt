package com.example.shopm.utility

//fun isString(value: Any?): Boolean {
//    return value is String
//}

fun isSpace(str: String): Boolean {
    return str.contains(" ")
}

fun isFirstNumber(str: String): Boolean {
    if (str.isEmpty()) return false
    val firstChar = str[0]
    return firstChar.isDigit()
}

//fun isNumber(str: String): Boolean {
//    return str.toDoubleOrNull() != null
//}

//fun isPositiveInteger(str: String): Boolean {
//    val num = str.toIntOrNull()
//    return str.isNotBlank() && num != null && num > 0
//}

fun isValidPhoneNumber(phone: String): Boolean {
//    val regex = Regex("^(0|\\+84)[1-9][0-9]{8}$")
    val regex = Regex("^0[35789][0-9]{8}$")
    return regex.matches(phone.trim())
}

fun containsSpecialCharacters(str: String): Boolean {
    val regex = Regex("[^a-zA-Z0-9 ]")
    return regex.containsMatchIn(str)
}