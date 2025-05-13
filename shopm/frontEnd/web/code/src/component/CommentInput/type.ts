export interface imageContainer_optiopns {
    index: number;
}

export interface videoContainer_optiopns {
    index: number;
}

export interface detail_optiopns {
    isShow: boolean;
    isShowComponent: boolean;
}

export type context_type = {
    comment: string;
    images: File[];
    videos: File[];
    imageContainer: imageContainer_optiopns;
    videoContainer: videoContainer_optiopns;
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
    setVideos: React.Dispatch<React.SetStateAction<File[]>>;
    setImageContainer: React.Dispatch<React.SetStateAction<imageContainer_optiopns>>;
    setVideoContainer: React.Dispatch<React.SetStateAction<videoContainer_optiopns>>;
    detail: detail_optiopns;
    setDetail: React.Dispatch<React.SetStateAction<detail_optiopns>>;
};
