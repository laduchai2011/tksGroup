import { memo, useId, useRef, useState, useCallback } from 'react';
import style from './style.module.scss';
import { MdPhotoLibrary } from 'react-icons/md';
import { PHOTO } from '@src/const/text';
import MyImage from './component/MyImage';

const ImageContainer = () => {
    const id_folderInput = useId();
    const input_element = useRef<HTMLInputElement | null>(null);
    const [images, setImages] = useState<File[]>([]);
    const [videos, setVideos] = useState<File[]>([]);

    const handleFolderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
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

            setImages(images);
            setVideos(videos);
        }
    }, []);

    const handleIconClick = () => {
        input_element.current?.click();
    };

    const list_image = images.map((data, index) => {
        return <MyImage key={index} data={data} />;
    });

    const list_video = videos.map((data, index) => {
        // return <MyVideo className={style.myImage} key={index} option={{ my_src: data }} />;
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
        </div>
    );
};

export default memo(ImageContainer);
