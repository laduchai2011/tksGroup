package org.example.route.account

import org.example.database.ConnectSqlServer

fun  AccountQuerySqlServer() {
    val conn = ConnectSqlServer.connectionShopmDev
    val stmt = conn.createStatement()
    val resultSet = stmt.executeQuery("SELECT * FROM Users")

//    while (resultSet.next()) {
//        println("User: ${resultSet.getString("username")}")
//    }

    resultSet.close()
    stmt.close()
}