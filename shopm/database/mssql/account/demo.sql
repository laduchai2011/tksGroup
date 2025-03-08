INSERT INTO
    account (
        id,
        userName,
        password,
        phone,
        firstName,
        lastName,
        avatar,
        updateTime,
        createTime
    )
VALUES
    (
        0,
        'laduchai',
        '123',
        '0789860854',
        'la',
        'hai',
        NULL,
        TODATETIMEOFFSET(SYSUTCDATETIME(), -5),
        TODATETIMEOFFSET(SYSUTCDATETIME(), -5)
    );