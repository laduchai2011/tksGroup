INSERT INTO
    account (
        id,
        userName,
        password,
        phone,
        firstName,
        lastName,
        avatar,
        status,
        updateTime,
        createTime
    )
VALUES
    (
        1,
        'laduchai',
        '123',
        '0789860854',
        'la',
        'hai',
        NULL,
        'normal',
        TODATETIMEOFFSET(SYSUTCDATETIME(), -5),
        TODATETIMEOFFSET(SYSUTCDATETIME(), -5)
    );