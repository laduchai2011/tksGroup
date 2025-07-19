package org.example.database


object ConfigSqlServer {
    object ShopmDev {
        const val URL = "jdbc:sqlserver://localhost:1434;databaseName=shopm_dev;encrypt=true;trustServerCertificate=true"
        const val USER = "sa"
        const val PASSWORD = "201195laducHai"
    }
    object ShopmChangeHistoryDev {
        const val URL = "jdbc:sqlserver://localhost:1434;databaseName=shopm_change_history_dev;encrypt=true;trustServerCertificate=true"
        const val USER = "sa"
        const val PASSWORD = "201195laducHai"
    }
}