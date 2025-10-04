import { FC, memo, useMemo, useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { CLOSE } from '@src/const/text';
import VideoHls from '@src/component/VideoHls';
import LazyImg from '../LazyImg';
import VideoHlsOverview from '@src/component/VideoHlsOverview';
import { options_enum, selectedOptions_type } from './type';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    isShow?: boolean;
    data?: unknown;
    onClose?: () => void;
}

const DialogPlayImage: FC<ComponentProps> = ({ isShow, data, onClose, className, ...props }) => {
    console.log('DialogPlayImage', data);
    const parent_element = useRef<HTMLDivElement | null>(null);
    const options_element = useRef<HTMLDivElement | null>(null);
    const myCroll_element = useRef<HTMLDivElement | null>(null);

    // sroll content
    const contentContainer_element = useRef<HTMLDivElement | null>(null);
    const imageContainer_element = useRef<HTMLDivElement | null>(null);
    const imageListContainer_element = useRef<HTMLDivElement | null>(null);

    const [selectedOption, setSelectedOption] = useState<selectedOptions_type>(options_enum.ALL);

    useEffect(() => {
        if (isShow) {
            if (parent_element.current) {
                parent_element.current.classList.add(style.parent_show_display);
            }
            const timeout = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show_opacity);
                }
                clearTimeout(timeout);
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
        if (!imageContainer_element.current) return;
        if (!imageListContainer_element.current) return;

        const contentContainerElement = contentContainer_element.current;
        const imageContainerElement = imageContainer_element.current;
        const imageListContainerElement = imageListContainer_element.current;

        switch (selectedOption) {
            case options_enum.ALL: {
                contentContainerElement.style.left = '0';
                imageContainerElement.classList.add(style.half);
                imageContainerElement.classList.remove(style.full);
                imageListContainerElement.classList.add(style.half);
                imageListContainerElement.classList.remove(style.full);
                break;
            }
            case options_enum.PLAY: {
                contentContainerElement.style.left = '0';
                imageContainerElement.classList.remove(style.half);
                imageContainerElement.classList.add(style.full);
                imageListContainerElement.classList.remove(style.half);
                imageListContainerElement.classList.add(style.full);
                break;
            }
            case options_enum.LIST: {
                contentContainerElement.style.left = '-100%';
                imageContainerElement.classList.remove(style.half);
                imageContainerElement.classList.add(style.full);
                imageListContainerElement.classList.remove(style.half);
                imageListContainerElement.classList.add(style.full);
                break;
            }
            default: {
                contentContainerElement.style.left = '0';
                imageContainerElement.classList.add(style.half);
                imageContainerElement.classList.remove(style.full);
                imageListContainerElement.classList.add(style.half);
                imageListContainerElement.classList.remove(style.full);
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

    const srcImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpao8X6PNUrN1vgwedPR0FJu_IMZdA82jIag&s';

    const list_image = useMemo(() => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
            <LazyImg key={index} className={style.video1} srcImg={srcImage} />
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
                        <div className={style.imageContainer} ref={imageContainer_element}>
                            <LazyImg className={style.image} srcImg={srcImage} />
                        </div>
                        <div className={style.imageListContainer} ref={imageListContainer_element}>
                            <div className={style.imageList}>{list_image}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DialogPlayImage);
