import { FC, memo, useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const Photo: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const photoContainer_element = useRef<HTMLDivElement | null>(null);
    const [view, setView] = useState<string>('image');

    useEffect(() => {
        if (!photoContainer_element.current) return;
        const photoContainerElement = photoContainer_element.current;
        const { clientWidth } = photoContainerElement;
        let index = 0;
        if (view === 'image') {
            index = 0;
        }
        if (view === 'video') {
            index = 1;
        }
        photoContainerElement.scrollTo({
            left: index * clientWidth,
            behavior: 'smooth',
        });
    }, [view]);

    return isLoading ? (
        <Skeleton className={style.parentLoading} />
    ) : (
        <div className={style.parent}>
            <div className={style.photoContainer} ref={photoContainer_element}>
                <img
                    className={style.photo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExHK5xIJNE-7nF_cQ2zNAf9_28Dslrqu26A&s"
                    alt=""
                />
                <img
                    className={style.photo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdWA_dzMoFmwsSCDDQDg5m-bGvkUxLEex0g&s"
                    alt=""
                />
            </div>
            <div className={style.controlContainer}>
                <div className={style.dotContainer}>
                    <div className={style.circle}>
                        <div className={style.dot} />
                    </div>
                </div>
                <div className={style.options}>
                    <div className={style.option} onClick={() => setView('image')}>
                        Image
                    </div>
                    <div className={style.option} onClick={() => setView('video')}>
                        Video
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Photo);
