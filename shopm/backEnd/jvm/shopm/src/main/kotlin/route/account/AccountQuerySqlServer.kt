package org.example.route.account

import org.example.dataStruct.AccountField
import org.example.database.ConnectSqlServer
import java.time.OffsetDateTime

class  AccountQuerySqlServer() {

    fun signin(userName: String, password: String): AccountField? {
        val conn = ConnectSqlServer.connectionShopmDev
        val query = "SELECT * FROM dbo.Signin(?, ?)"
        val stmt = conn.prepareStatement(query)

        stmt.setString(1, userName)
        stmt.setString(2, password)

        val resultSet = stmt.executeQuery()

        if (resultSet.next()) {
            return AccountField(
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
        }

        resultSet.close()
        stmt.close()

        return null
    }
}