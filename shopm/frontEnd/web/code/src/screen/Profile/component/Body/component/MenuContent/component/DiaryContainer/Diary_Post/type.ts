export interface context_type {
    images: File[];
    videos: File[];
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
    setVideos: React.Dispatch<React.SetStateAction<File[]>>;
}
