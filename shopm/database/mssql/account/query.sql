CREATE FUNCTION Login (@userName NVARCHAR(100), @password NVARCHAR(100)) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.account
    WHERE
        userName = @userName
        AND password = @password
);

GO
    -- how to use:
SELECT
    *
FROM
    dbo.Login('userName', 'password');