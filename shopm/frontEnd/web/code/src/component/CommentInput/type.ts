export interface state_props {
    commnet: string;
    images: File[];
    videos: File[];
    imageContainer: {
        index: number;
        isShow: boolean;
    };
}

export interface imageContainer_optopns {
    index: number;
}

export interface videoContainer_optopns {
    index: number;
}

export type context_type = {
    comment: string;
    images: File[];
    videos: File[];
    imageContainer: imageContainer_optopns;
    videoContainer: videoContainer_optopns;
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
    setVideos: React.Dispatch<React.SetStateAction<File[]>>;
    setImageContainer: React.Dispatch<React.SetStateAction<imageContainer_optopns>>;
    setVideoContainer: React.Dispatch<React.SetStateAction<videoContainer_optopns>>;
};
