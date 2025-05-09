import { FC, useEffect, useRef, useState, useId, useCallback } from 'react';
import style from './style.module.scss';
import { CommentInputProps } from './type';
import { COMMENT, CANCEL } from '@src/const/text';
import { FaFileImage } from 'react-icons/fa';
import ImageContainer from '@src/component/ImageContainer';
import VideoContainer from '@src/component/VideoContainer';

interface MyCommentInputProps extends React.HTMLProps<HTMLDivElement> {
    commentInput?: CommentInputProps;
    [key: string]: unknown;
}

const CommentInput: FC<MyCommentInputProps> = ({ className, ...props }) => {
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);
    const input_element = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState<string>('');
    // const [image, setImage] = useState<string | undefined>(undefined);
    const [images, setImages] = useState<File[]>([]);

    const id_folderInput = useId();

    useEffect(() => {
        textarea_element.current?.focus();
    }, []);

    // useEffect(() => {
    //     if (images) {
    //         return () => {
    //             for (let i: number = 0; i < images.length; i++) {
    //                 URL.revokeObjectURL(images[i]);
    //             }
    //         };
    //     }
    // }, [images]);

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
            for (const file of Array.from(files as FileList)) {
                // const url = URL.createObjectURL(file);
                setImages((pre) => [...pre, file]);
            }
        }
    }, []);

    return (
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
                        <ImageContainer className={style.imageContainer} options={{ src_array: images }} />
                    </div>
                )}
                {/* {image && (
                    <div className={style.videos}>
                        <VideoContainer options={{ src_array: images }} />
                    </div>
                )} */}
            </div>
            <div className={style.buttonContainer}>
                <div className={style.icon}>
                    <FaFileImage onClick={handleIconClick} id={id_folderInput} size={25} color="#39ff33" />
                    <input ref={input_element} onChange={handleFolderChange} type="file" id={id_folderInput} multiple />
                </div>
                <div className={style.buttons}>
                    <button>{CANCEL}</button>
                    <button>{COMMENT}</button>
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
