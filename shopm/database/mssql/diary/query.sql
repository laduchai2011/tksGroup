CREATE PROCEDURE GetDiarys
	@page INT,
    @size INT,
    @accountId INT
AS
BEGIN
	-- Tập kết quả 1: dữ liệu phân trang
    WITH diarys AS (
        SELECT d.*,
			ROW_NUMBER() OVER (ORDER BY d.id DESC) AS rn
        FROM dbo.diary AS d
		WHERE 
			status = 'normal' 
			AND (@accountId IS NULL OR d.accountId = @accountId) 
    )
    SELECT *
    FROM diarys
    WHERE rn BETWEEN ((@page - 1) * @size + 1) AND (@page * @size);

    -- Tập kết quả 2: tổng số dòng
    SELECT COUNT(*) AS totalCount
	FROM dbo.diary AS d
		WHERE 
			status = 'normal' 
			AND (@accountId IS NULL OR d.accountId = @accountId) 
END
GO