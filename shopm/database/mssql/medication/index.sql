CREATE TABLE medication (
    id INT PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    title NVARCHAR(255) NOT NULL,
    avatar NVARCHAR(255) NOT NULL,
    type NVARCHAR(255) NOT NULL,
    catalog NVARCHAR(MAX) NOT NULL,
    information NVARCHAR(MAX) NOT NULL,
    note NVARCHAR(255) NOT NULL,
    averageRating FLOAT,
    rateCount INT,
    status NVARCHAR(255) NOT NULL,
    provider_id INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL

    FOREIGN KEY (provider_id) REFERENCES provider(id)
)
GO
CREATE NONCLUSTERED INDEX idx_provider_id ON medication(provider_id);
GO

CREATE TABLE medication_image (
    id INT PRIMARY KEY,
    url NVARCHAR(255) NOT NULL,
    status NVARCHAR(255) NOT NULL,
    medication_id INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL

    FOREIGN KEY (medication_id) REFERENCES medication(id)
)
GO
CREATE NONCLUSTERED INDEX idx_medication_id ON medication_image(medication_id);
GO

CREATE TABLE medication_video (
    id INT PRIMARY KEY,
    url NVARCHAR(255) NOT NULL,
    status NVARCHAR(255) NOT NULL,
    medication_id INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL

    FOREIGN KEY (medication_id) REFERENCES medication(id)
)
GO
CREATE NONCLUSTERED INDEX idx_medication_id ON medication_video(medication_id);
GO