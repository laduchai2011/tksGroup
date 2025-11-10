CREATE TYPE DiaryImageType AS TABLE (
    url NVARCHAR(255)
);
GO
CREATE TYPE DiaryVideoType AS TABLE (
    url NVARCHAR(255)
);
GO

CREATE PROCEDURE CreateDiary
	@title NVARCHAR(255),
	@accountId INT,
	@diaryImage DiaryImageType READONLY,
	@diaryVideo DiaryVideoType READONLY
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY
        BEGIN TRANSACTION;
		DECLARE @newDiaryId INT;

		-- Th�m medication
        INSERT INTO diary (title, likeAmount, dislikeAmount, commentAmount, status, accountId, updateTime, createTime)
        VALUES (@title, 0, 0, 0, 'normal', @accountId, SYSDATETIMEOFFSET(), SYSDATETIMEOFFSET());

		SET @newDiaryId = SCOPE_IDENTITY();

		-- Th�m diaryImage
		INSERT INTO diary_image (url, diaryId, updateTime, createTime)
        SELECT 
            url, @newDiaryId, SYSDATETIMEOFFSET(), SYSDATETIMEOFFSET()
        FROM @diaryImage;

		-- Th�m diaryVideo
		INSERT INTO diary_video (url, diaryId, updateTime, createTime)
        SELECT 
            url, @newDiaryId, SYSDATETIMEOFFSET(), SYSDATETIMEOFFSET()
        FROM @diaryVideo;

		SELECT * FROM dbo.diary WHERE id = @newDiaryId;

		COMMIT TRANSACTION;
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION;
		THROW;
	END CATCH
END;
GO