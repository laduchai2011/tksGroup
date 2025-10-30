CREATE PROCEDURE GetMedications
	@page INT,
    @size INT,
    @userId INT
AS
BEGIN
	-- Tập kết quả 1: dữ liệu phân trang
    WITH medications AS (
        SELECT m.*,
			ROW_NUMBER() OVER (ORDER BY m.id DESC) AS rn
        FROM dbo.medication AS m
		WHERE 
			status = 'normal' 
			AND (@userId IS NULL OR m.userId = @userId) 
    )
    SELECT *
    FROM medications
    WHERE rn BETWEEN ((@page - 1) * @size + 1) AND (@page * @size);

    -- Tập kết quả 2: tổng số dòng
    SELECT COUNT(*) AS totalCount
	FROM dbo.medication AS m
		WHERE 
			status = 'normal' 
			AND (@userId IS NULL OR m.userId = @userId) 
END
GO