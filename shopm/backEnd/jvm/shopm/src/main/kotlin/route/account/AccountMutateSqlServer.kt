package org.example.route.account

import org.example.dataStruct.AccountField
import org.example.database.ConnectSqlServer
import java.time.OffsetDateTime

class AccountMutateSqlServer {

    fun isAccountCheckUserName(userName: String): Boolean {
        val conn = ConnectSqlServer.connectionShopmDev
        val query = "SELECT 1 FROM account WHERE userName = ?"
        val stmt = conn.prepareStatement(query)

        stmt.setString(1, userName)

        val resultSet = stmt.executeQuery()

        while (resultSet.next()) {
            return true
        }

        resultSet.close()
        stmt.close()

        return false
    }

    fun isAccountCheckPhone(phone: String): Boolean {
        val conn = ConnectSqlServer.connectionShopmDev
        val query = "SELECT 1 FROM account WHERE phone = ?"
        val stmt = conn.prepareStatement(query)

        stmt.setString(1, phone)

        val resultSet = stmt.executeQuery()

        while (resultSet.next()) {
            return true
        }

        resultSet.close()
        stmt.close()

        return false
    }

    fun signupToDB(userName: String, password: String, phone: String, firstName: String, lastName: String): AccountField? {
        val sql = "{call Signup(?, ?, ?, ?, ?)}"
        val conn = ConnectSqlServer.connectionShopmDev
        val stmt = conn.prepareCall(sql)

        stmt.setString(1, userName)
        stmt.setString(2, password)
        stmt.setString(3, phone)
        stmt.setString(4, firstName)
        stmt.setString(5, lastName)

        val resultSet = stmt.executeQuery()

        var newAccount: AccountField? = null

        // Lấy kết quả từ OUTPUT INSERTED.*
        while (resultSet.next()) {
            val account = AccountField(
                id = resultSet.getInt("id"),
                userName = resultSet.getString("userName"),
                password = resultSet.getString("password"),
                phone = resultSet.getString("phone"),
                firstName = resultSet.getString("firstName"),
                lastName = resultSet.getString("lastName"),
                avatar = resultSet.getString("avatar"),
                status = resultSet.getString("status"),
                updateTime = resultSet.getObject("updateTime", OffsetDateTime::class.java)
            )
            newAccount = account
        }

        resultSet.close()
        stmt.close()

        return newAccount
    }
}