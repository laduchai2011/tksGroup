package org.example.route.account

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

    fun signupToDB(userName: String, password: String, phone: String, firstName: String, lastName: String) {
        val sql = "{call Signup(?, ?, ?, ?, ?)}"
        val conn = ConnectSqlServer.connectionShopmDev
        val stmt = conn.prepareCall(sql)

        stmt.setString(1, userName)
        stmt.setString(2, password)
        stmt.setString(3, phone)
        stmt.setString(4, firstName)
        stmt.setString(5, lastName)

        val resultSet = stmt.executeQuery()

        // Lấy kết quả từ OUTPUT INSERTED.*
        while (resultSet.next()) {
            val id = resultSet.getInt("id")
            val userName = resultSet.getString("userName")
            val password = resultSet.getString("password")
            val phone = resultSet.getString("phone")
            val firstName = resultSet.getString("firstName")
            val lastName = resultSet.getString("lastName")
            val avatar = resultSet.getString("avatar")
            val status = resultSet.getString("status")
            val updateTime: OffsetDateTime = resultSet.getObject("updateTime", OffsetDateTime::class.java)
        }

        resultSet.close()
        stmt.close()
    }
}