CREATE TABLE medication (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    type NVARCHAR(255) NOT NULL,
    typeGroup NVARCHAR(255) NOT NULL,
    information NVARCHAR(MAX) NOT NULL,
    averageRating FLOAT NOT NULL,
    rateCount INT NOT NULL,
	amount INT NOT NULL,
	discount FLOAT NOT NULL,
	price FLOAT NOT NULL,
    status NVARCHAR(255) NOT NULL,
    accountId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL,

    CONSTRAINT FK_medication_Account FOREIGN KEY (accountId) REFERENCES account(id)
)
GO
CREATE NONCLUSTERED INDEX idx_account_id ON medication(accountId);
GO

CREATE TABLE medication_image (
	id INT PRIMARY KEY IDENTITY(1,1),
    url NVARCHAR(255) NOT NULL,
    medicationId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL, 
    
    CONSTRAINT FK_MedicationImage_Medication FOREIGN KEY (medicationId) REFERENCES medication(id)
)
GO
CREATE NONCLUSTERED INDEX idx_medication_id ON medication_image(medicationId);
GO

CREATE TABLE medication_video (
	id INT PRIMARY KEY IDENTITY(1,1),
    url NVARCHAR(255) NOT NULL,
    medicationId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL,

    CONSTRAINT FK_MedicationVideo_Medication FOREIGN KEY (medicationId) REFERENCES medication(id)
)
GO
CREATE NONCLUSTERED INDEX idx_medication_id ON medication_video(medicationId);
GO