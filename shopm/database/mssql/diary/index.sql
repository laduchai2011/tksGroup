CREATE TABLE diary (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    likeAmount INT NOT NULL,
    dislikeAmount INT NOT NULL,
    commentAmount INT NOT NULL,
    status NVARCHAR(255) NOT NULL,
    accountId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL,
    
	CONSTRAINT FK_diary_Account FOREIGN KEY (accountId) REFERENCES account(id)
)
GO
CREATE NONCLUSTERED INDEX idx_account_id ON diary(accountId);
GO

CREATE TABLE diary_image (
	id INT PRIMARY KEY IDENTITY(1,1),
    url NVARCHAR(255) NOT NULL,
    diaryId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL, 
    
    CONSTRAINT FK_DiaryImage_Diary FOREIGN KEY (diaryId) REFERENCES diary(id)
)
GO
CREATE NONCLUSTERED INDEX idx_diary_id ON diary_image(diaryId);
GO

CREATE TABLE diary_video (
	id INT PRIMARY KEY IDENTITY(1,1),
    url NVARCHAR(255) NOT NULL,
    diaryId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL, 
    
    CONSTRAINT FK_DiaryVideo_Diary FOREIGN KEY (diaryId) REFERENCES diary(id)
)
GO
CREATE NONCLUSTERED INDEX idx_diary_id ON diary_video(diaryId);
GO

CREATE TABLE diary_comment (
	id INT PRIMARY KEY IDENTITY(1,1),
    content NVARCHAR(255) NOT NULL,
	likeAmount INT NOT NULL,
	dislikeAmount INT NOT NULL,
    level INT NOT NULL,
	status NVARCHAR(255) NOT NULL,
	diaryCommentId INT,
	diaryId INT NOT NULL,
	accountId INT NOT NULL,
    updateTime DATETIMEOFFSET(7) NOT NULL,
    createTime DATETIMEOFFSET(7) NOT NULL,

	CONSTRAINT FK_DiaryComment_DiaryComment FOREIGN KEY (diaryCommentId) REFERENCES diary_comment(id),
    CONSTRAINT FK_DiaryComment_Diary FOREIGN KEY (diaryId) REFERENCES diary(id),
	CONSTRAINT FK_DiaryComment_Account FOREIGN KEY (accountId) REFERENCES account(id)
)
GO