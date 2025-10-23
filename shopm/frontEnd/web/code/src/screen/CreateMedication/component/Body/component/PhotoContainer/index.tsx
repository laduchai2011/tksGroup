import { FC, memo, useId, useRef, useCallback } from 'react';
import style from './style.module.scss';
import { MdPhotoLibrary } from 'react-icons/md';
import { PHOTO } from '@src/const/text';
import MyImage from './component/MyImage';
import MyVideo from './component/MyVideo';

const PhotoContainer: FC<{
    localImages: File[];
    setLocalImages: React.Dispatch<React.SetStateAction<File[]>>;
    localVideos: File[];
    setLocalVideos: React.Dispatch<React.SetStateAction<File[]>>;
}> = ({ localImages, setLocalImages, localVideos, setLocalVideos }) => {
    const id_folderInput = useId();
    const input_element = useRef<HTMLInputElement | null>(null);

    const handleFolderChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;

            if (files) {
                const images: File[] = [];
                const videos: File[] = [];
                Array.from(files).forEach((file) => {
                    if (file.type.startsWith('image/')) {
                        images.push(file);
                    } else if (file.type.startsWith('video/')) {
                        videos.push(file);
                    }
                });

                setLocalImages(images);
                setLocalVideos(videos);
            }
        },
        [setLocalImages, setLocalVideos]
    );

    const handleIconClick = () => {
        input_element.current?.click();
    };

    const handleDeleteImage = (data: File) => {
        const newImages = localImages.filter((image) => image !== data);
        setLocalImages(newImages);
    };

    const handleDeleteVideo = (data: File) => {
        const newVideos = localVideos.filter((video) => video !== data);
        setLocalVideos(newVideos);
    };

    const list_image = localImages.map((data, index) => {
        return <MyImage key={index} index={index} data={data} onClose={() => handleDeleteImage(data)} />;
    });

    const list_video = localVideos.map((data, index) => {
        return <MyVideo key={index} index={index} data={data} onClose={() => handleDeleteVideo(data)} />;
    });

    return (
        <div className={style.parent}>
            <div className={style.iconContainer}>
                <div>
                    <MdPhotoLibrary id={id_folderInput} onClick={handleIconClick} title={PHOTO} />
                    <input ref={input_element} onChange={handleFolderChange} type="file" id={id_folderInput} multiple />
                </div>
            </div>
            <div className={style.imageContainer}>{list_image}</div>
            <div className={style.videoContainer}>{list_video}</div>
        </div>
    );
};

export default memo(PhotoContainer);
