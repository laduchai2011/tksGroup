package org.example.database

import java.sql.Connection
import java.sql.DriverManager

object ConnectSqlServer {

    val connectionShopmDev: Connection by lazy {
        try {
            DriverManager.getConnection(
                ConfigSqlServer.ShopmDev.URL,
                ConfigSqlServer.ShopmDev.USER,
                ConfigSqlServer.ShopmDev.PASSWORD
            )
        } catch (e: Exception) {
            e.printStackTrace()
            throw RuntimeException("Failed to connect to the database (ShopmDev)", e)
        }
    }

    val connectionShopmChangeHistoryDev: Connection by lazy {
        try {
            DriverManager.getConnection(
                ConfigSqlServer.ShopmChangeHistoryDev.URL,
                ConfigSqlServer.ShopmChangeHistoryDev.USER,
                ConfigSqlServer.ShopmChangeHistoryDev.PASSWORD
            )
        } catch (e: Exception) {
            e.printStackTrace()
            throw RuntimeException("Failed to connect to the database (ShopmChangeHistoryDev)", e)
        }
    }
}