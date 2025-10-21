CREATE TABLE medication (
    id INT PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    type NVARCHAR(255) NOT NULL,
    typeGroup NVARCHAR(255) NOT NULL,
    information NVARCHAR(MAX) NOT NULL,
    averageRating FLOAT,
    rateCount INT,
    status NVARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL,

    CONSTRAINT FK_medication_User FOREIGN KEY (userId) REFERENCES account(id)
)
GO
CREATE NONCLUSTERED INDEX idx_user_id ON medication(userId);
GO

CREATE TABLE medication_image (
    id INT PRIMARY KEY,
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
    id INT PRIMARY KEY,
    url NVARCHAR(255) NOT NULL,
    medicationId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL,

    CONSTRAINT FK_MedicationVideo_Medication FOREIGN KEY (medicationId) REFERENCES medication(id)
)
GO
CREATE NONCLUSTERED INDEX idx_medication_id ON medication_video(medicationId);
GO