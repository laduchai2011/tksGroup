import { FC, memo, useMemo, useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { CLOSE } from '@src/const/text';
import VideoHls from '@src/component/VideoHls';
import VideoHlsOverview from '@src/component/VideoHlsOverview';
import { options_enum, selectedOptions_type } from './type';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    isShow?: boolean;
    data?: unknown;
    onClose?: () => void;
}

const DialogPlayVideo: FC<ComponentProps> = ({ isShow, data, onClose, className, ...props }) => {
    console.log('DialogPlayVideo', data);
    const parent_element = useRef<HTMLDivElement | null>(null);
    const options_element = useRef<HTMLDivElement | null>(null);
    const myCroll_element = useRef<HTMLDivElement | null>(null);

    // sroll content
    const contentContainer_element = useRef<HTMLDivElement | null>(null);
    const videoContainer_element = useRef<HTMLDivElement | null>(null);
    const videoListContainer_element = useRef<HTMLDivElement | null>(null);

    const [isShow1, setIsShow1] = useState<boolean>(false);

    const [selectedOption, setSelectedOption] = useState<selectedOptions_type>(options_enum.ALL);

    useEffect(() => {
        if (isShow) {
            setIsShow1(true);
            const setTimeoutShow = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show_display);
                }
                const timeout = setTimeout(() => {
                    if (parent_element.current) {
                        parent_element.current.classList.add(style.parent_show_opacity);
                    }
                    clearTimeout(timeout);
                }, 50);
                clearTimeout(setTimeoutShow);
            }, 50);
        } else {
            if (parent_element.current) {
                parent_element.current.classList.remove(style.parent_show_opacity);
            }
            const timeout = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.remove(style.parent_show_display);
                    clearTimeout(timeout);
                }
            }, 350);
            const setTimeoutShow = setTimeout(() => {
                setIsShow1(false);
                clearTimeout(setTimeoutShow);
            }, 400);
        }
    }, [isShow]);

    useEffect(() => {
        // handle header
        if (!options_element.current) return;
        if (!myCroll_element.current) return;

        const optionsElement = options_element.current;
        const myScrollElement = myCroll_element.current;

        const optionsArray = Object.values(options_enum);
        const selectedOptionNumber = optionsArray.indexOf(selectedOption);
        const target = optionsElement.children[selectedOptionNumber] as HTMLElement;
        const width = target.offsetWidth;
        const left = target.offsetLeft;

        myScrollElement.style.width = `${width}px`;
        myScrollElement.style.left = `${left}px`;

        // handle content
        if (!contentContainer_element.current) return;
        if (!videoContainer_element.current) return;
        if (!videoListContainer_element.current) return;

        const contentContainerElement = contentContainer_element.current;
        const videoContainerElement = videoContainer_element.current;
        const videoListContainerElement = videoListContainer_element.current;

        switch (selectedOption) {
            case options_enum.ALL: {
                contentContainerElement.style.left = '0';
                videoContainerElement.classList.add(style.half);
                videoContainerElement.classList.remove(style.full);
                videoListContainerElement.classList.add(style.half);
                videoListContainerElement.classList.remove(style.full);
                break;
            }
            case options_enum.PLAY: {
                contentContainerElement.style.left = '0';
                videoContainerElement.classList.remove(style.half);
                videoContainerElement.classList.add(style.full);
                videoListContainerElement.classList.remove(style.half);
                videoListContainerElement.classList.add(style.full);
                break;
            }
            case options_enum.LIST: {
                contentContainerElement.style.left = '-100%';
                videoContainerElement.classList.remove(style.half);
                videoContainerElement.classList.add(style.full);
                videoListContainerElement.classList.remove(style.half);
                videoListContainerElement.classList.add(style.full);
                break;
            }
            default: {
                contentContainerElement.style.left = '0';
                videoContainerElement.classList.add(style.half);
                videoContainerElement.classList.remove(style.full);
                videoListContainerElement.classList.add(style.half);
                videoListContainerElement.classList.remove(style.full);
                break;
            }
        }
    }, [selectedOption]);

    const handleSelectedOptionNumber = (selectedOption: selectedOptions_type) => {
        setSelectedOption(selectedOption);
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const src_video =
        'http://192.168.5.100:3007/api/service_video/story/watch?id=khongphaiemdungkhong-1761410113566.mp4';

    const list_video = useMemo(() => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
            <VideoHlsOverview
                key={index}
                className={style.video1}
                srcImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpao8X6PNUrN1vgwedPR0FJu_IMZdA82jIag&s"
                srcVideo={src_video}
            />
        ));
    }, []);

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            <div className={style.main}>
                <div className={style.header}>
                    <div className={style.optionContainer}>
                        <div className={style.options} ref={options_element}>
                            <div className={style.option} onClick={() => handleSelectedOptionNumber(options_enum.ALL)}>
                                {options_enum.ALL}
                            </div>
                            <div className={style.option} onClick={() => handleSelectedOptionNumber(options_enum.PLAY)}>
                                {options_enum.PLAY}
                            </div>
                            <div className={style.option} onClick={() => handleSelectedOptionNumber(options_enum.LIST)}>
                                {options_enum.LIST}
                            </div>
                        </div>
                        <div className={style.myCroll} ref={myCroll_element} />
                    </div>
                    <div className={style.iconContainer}>
                        <div className={style.amount}>1</div>
                        <IoCloseCircleOutline className={style.closeIcon} onClick={() => handleClose()} title={CLOSE} />
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.contentContainer} ref={contentContainer_element}>
                        <div className={style.videoContainer} ref={videoContainer_element}>
                            {isShow1 && <VideoHls className={style.video} srcVideo={src_video} controls={true} />}
                        </div>
                        <div className={style.videoListContainer} ref={videoListContainer_element}>
                            {isShow1 && <div className={style.videoList}>{list_video}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DialogPlayVideo);
