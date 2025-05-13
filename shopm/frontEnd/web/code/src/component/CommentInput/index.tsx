import { FC, useEffect, useRef, useState, useId, useCallback } from 'react';
import style from './style.module.scss';
import { context_type, imageContainer_optiopns, videoContainer_optiopns, detail_optiopns } from './type';
import { COMMENT, CANCEL, DETAIL } from '@src/const/text';
import { FaFileImage } from 'react-icons/fa';
import { Context } from './context';
import ImageContainer from './component/ImageContainer';
import VideoContainer from './component/VideoContainer';
import Detail from './component/Detail';

interface MyCommentInputProps extends React.HTMLProps<HTMLDivElement> {
    [key: string]: unknown;
}

const CommentInput: FC<MyCommentInputProps> = ({ className, ...props }) => {
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);
    const input_element = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<string>('');
    const [images, setImages] = useState<File[]>([]);
    const [videos, setVideos] = useState<File[]>([]);
    const [imageContainer, setImageContainer] = useState<imageContainer_optiopns>({
        index: 0,
    });
    const [videoContainer, setVideoContainer] = useState<videoContainer_optiopns>({
        index: 0,
    });
    const [detail, setDetail] = useState<detail_optiopns>({
        isShow: false,
        isShowComponent: false,
    });

    const id_folderInput = useId();

    useEffect(() => {
        textarea_element.current?.focus();
    }, []);

    const handleInput = () => {
        if (textarea_element.current) {
            textarea_element.current.style.height = 'auto';
            textarea_element.current.style.height = textarea_element.current.scrollHeight + 'px';
        }
    };

    const handle_change = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const _value = e.target.value;
        setValue(_value);
    }, []);

    const handleIconClick = () => {
        input_element.current?.click(); // Kích hoạt input ẩn
    };

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

            setImages((pre) => pre.concat(images));
            setVideos((pre) => pre.concat(videos));
        }
    }, []);

    const handle_detail = useCallback(() => {
        setDetail({
            isShow: true,
            isShowComponent: true,
        });
    }, []);

    const context_value: context_type = {
        comment: '',
        images: images,
        videos: videos,
        imageContainer: imageContainer,
        videoContainer: videoContainer,
        setImages,
        setVideos,
        setImageContainer,
        setVideoContainer,
        detail: detail,
        setDetail,
    };

    return (
        <Context.Provider value={context_value}>
            <div className={`${style.parent} ${className || ''}`} {...props}>
                <textarea
                    ref={textarea_element}
                    value={value}
                    onChange={(e) => handle_change(e)}
                    onInput={handleInput}
                    rows={1}
                    placeholder={COMMENT}
                />
                <div className={style.photoContainer}>
                    {images.length > 0 && (
                        <div className={style.images}>
                            <ImageContainer className={style.imageContainer} />
                        </div>
                    )}
                    {videos.length > 0 && (
                        <div className={style.videos}>
                            <VideoContainer className={style.videoContainer} />
                        </div>
                    )}
                </div>
                <div className={style.buttonContainer}>
                    <div className={style.icon}>
                        <FaFileImage onClick={handleIconClick} id={id_folderInput} size={25} color="#39ff33" />
                        <input
                            ref={input_element}
                            onChange={handleFolderChange}
                            type="file"
                            id={id_folderInput}
                            multiple
                        />
                    </div>
                    <div className={style.buttons}>
                        <button>{CANCEL}</button>
                        <button onClick={() => handle_detail()}>{DETAIL}</button>
                        <button>{COMMENT}</button>
                    </div>
                </div>
                <div>{detail.isShowComponent && <Detail />}</div>
            </div>
        </Context.Provider>
    );
};

export default CommentInput;
