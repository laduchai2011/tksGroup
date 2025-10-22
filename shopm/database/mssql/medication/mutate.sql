CREATE TYPE MedicationImageType AS TABLE (
    url NVARCHAR(255),
    medicationId INT
);
GO
CREATE TYPE MedicationVideoType AS TABLE (
    url NVARCHAR(255),
    medicationId INT
);
GO

ALTER PROCEDURE CreateMedication
	@title NVARCHAR(255),
	@type NVARCHAR(255),
	@typeGroup NVARCHAR(255),
	@information NVARCHAR(MAX),
	@averageRating FLOAT,
	@rateCount INT,
	@userId INT,
	@medicationImage MedicationImageType READONLY,
	@medicationVideo MedicationVideoType READONLY
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY
        BEGIN TRANSACTION;
		DECLARE @newMedicationId INT;

		-- Thêm medication
        INSERT INTO medication (title, type, typeGroup, information, averageRating, rateCount, status, userId, updateTime, createTime)
        VALUES (@title, @type, @typeGroup, @information, @averageRating, @rateCount, 'normal', @userId, SYSDATETIMEOFFSET(), SYSDATETIMEOFFSET());

		SET @newMedicationId = SCOPE_IDENTITY();

		-- Thêm medicationImage
		INSERT INTO medication_image (url, medicationId, updateTime, createTime)
        SELECT 
            url, @newMedicationId, SYSDATETIMEOFFSET(), SYSDATETIMEOFFSET()
        FROM @medicationImage;

		-- Thêm medicationVideo
		INSERT INTO medication_video (url, medicationId, updateTime, createTime)
        SELECT 
            url, @newMedicationId, SYSDATETIMEOFFSET(), SYSDATETIMEOFFSET()
        FROM @medicationVideo;

		SELECT * FROM dbo.medication WHERE id = @newMedicationId;

		COMMIT TRANSACTION;
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION;
		THROW;
	END CATCH
END;
GO