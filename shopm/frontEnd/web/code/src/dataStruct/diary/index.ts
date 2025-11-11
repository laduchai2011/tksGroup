export interface DiaryField {
    id: number;
    title: string;
    likeAmount: number;
    dislikeAmount: number;
    commentAmount: number;
    status: string;
    accountId: number;
    updateTime: string;
    createTime: string;
}

export interface DiaryImageField {
    id: number;
    url: string;
    diaryId: number;
    updateTime: string;
    createTime: string;
}

export interface DiaryVideoField {
    id: number;
    url: string;
    diaryId: number;
    updateTime: string;
    createTime: string;
}

export interface CreateDiaryBodyField {
    diary: DiaryField;
    images: DiaryImageField[];
    videos: DiaryVideoField[];
}

export interface DiaryBodyField {
    page: number;
    size: number;
    accountId?: number;
    id?: number;
}

export interface PagedDiaryField {
    items: DiaryField[];
    totalCount: number;
}
