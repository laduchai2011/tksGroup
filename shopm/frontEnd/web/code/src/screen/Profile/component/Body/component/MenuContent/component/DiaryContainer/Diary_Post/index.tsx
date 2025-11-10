import { useRef, useId, useCallback, useState } from 'react';
import style from './style.module.scss';
import { FaImage } from 'react-icons/fa6';
import { UPLOAD, CANCEL, PHOTO, WHAT_DO_YOU_THINK } from '@src/const/text';
import { Context } from './context';
import { context_type } from './type';
import MyImage from './component/MyImage';
import MyVideo from './component/MyVideo';
import { CreateDiaryBodyField } from '@src/dataStruct/diary';
import { useCreateDiaryMutation } from '@src/redux/query/diaryRTK';
import { AppDispatch } from '@src/redux';
import { useDispatch } from 'react-redux';
import { unstable_batchedUpdates } from 'react-dom';
import { setData_toastMessage } from '@src/redux/slice/Profile';
import { messageType_enum } from '@src/component/ToastMessage/type';

const Diary_Post = () => {
    const dispatch = useDispatch<AppDispatch>();
    const parent_element = useRef<HTMLDivElement | null>(null);
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);
    const input_element = useRef<HTMLInputElement | null>(null);

    const [images, setImages] = useState<File[]>([]);
    const [videos, setVideos] = useState<File[]>([]);
    const [title, setTitle] = useState<string>('');

    const [createDiary] = useCreateDiaryMutation();

    const id_folderInput = useId();

    const handleInput = () => {
        if (textarea_element.current) {
            textarea_element.current.style.height = 'auto';
            textarea_element.current.style.height = textarea_element.current.scrollHeight + 'px';
        }
    };

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

            setImages(images);
            setVideos(videos);
        }
    }, []);

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setTitle(value);
    };

    const handleUpload = () => {
        const createDiaryBody: CreateDiaryBodyField = {
            diary: {
                id: -1,
                title: title,
                likeAmount: 0,
                dislikeAmount: 0,
                commentAmount: 0,
                status: 'normal',
                accountId: -1,
                updateTime: '',
                createTime: '',
            },
            images: [],
            videos: [],
        };

        createDiary(createDiaryBody)
            .then((res) => {
                const resData = res.data;
                console.log(resData);
                if (resData?.isSuccess && resData.data) {
                    unstable_batchedUpdates(() => {
                        dispatch(
                            setData_toastMessage({
                                type: messageType_enum.SUCCESS,
                                message: 'Bạn vừa đăng 1 nhật ký !',
                            })
                        );
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const list_image = images.map((data, index) => {
        return <MyImage className={style.myImage} key={index} option={{ my_src: data }} />;
    });

    const list_video = videos.map((data, index) => {
        return <MyVideo className={style.myImage} key={index} option={{ my_src: data }} />;
    });

    const context_value: context_type = {
        images: images,
        videos: videos,
        setImages,
        setVideos,
    };

    return (
        <Context.Provider value={context_value}>
            <div className={style.parent} ref={parent_element}>
                <textarea
                    ref={textarea_element}
                    value={title}
                    onChange={(e) => handleTitleChange(e)}
                    onInput={handleInput}
                    title={WHAT_DO_YOU_THINK}
                    placeholder={WHAT_DO_YOU_THINK}
                    rows={4}
                />
                <div className={style.photoContainer}>
                    <div className={style.imageContainer}>{list_image}</div>
                    <div className={style.videoContainer}>{list_video}</div>
                </div>
                <div className={style.buttonContainer}>
                    <div className={style.iconBtn}>
                        <FaImage
                            title={PHOTO}
                            onClick={handleIconClick}
                            id={id_folderInput}
                            size={25}
                            color="#39ff33"
                        />
                        <input
                            ref={input_element}
                            onChange={handleFolderChange}
                            type="file"
                            id={id_folderInput}
                            multiple
                        />
                    </div>
                    <div className={style.rightBtn}>
                        <div title={CANCEL}>{CANCEL}</div>
                        <div onClick={() => handleUpload()} title={UPLOAD}>
                            {UPLOAD}
                        </div>
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
};

export default Diary_Post;
