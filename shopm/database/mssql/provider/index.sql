CREATE TABLE provider (
    id INT PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    avatar NVARCHAR(255),
    banner NVARCHAR(255),
    follow INT,
    averageRating FLOAT,
    rateCount INT,
    status NVARCHAR(255) NOT NULL,
    account_id INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL

    FOREIGN KEY (account_id) REFERENCES account(id)
)
GO
CREATE NONCLUSTERED INDEX idx_account_id ON provider(account_id);
GO