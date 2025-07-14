package org.example.database


object ConfigSqlServer {
    object ShopmDev {
        const val URL = "jdbc:sqlserver://localhost:1433;databaseName=shopm_dev"
        const val USER = "sa"
        const val PASSWORD = "201195laducHai"
    }
    object ShopmChangeHistoryDev {
        const val URL = "jdbc:sqlserver://localhost:1433;databaseName=shopm_change_history_dev"
        const val USER = "sa"
        const val PASSWORD = "201195laducHai"
    }
}