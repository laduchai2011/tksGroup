import { FC, memo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import VideoHlsOverview from '@src/component/VideoHlsOverview';
import Skeleton from '@src/component/Skeleton';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { IoCloseCircle } from 'react-icons/io5';
import { CLOSE, SEE_VIDEO } from '@src/const/text';

const VideoContainer: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const videos_element = useRef<HTMLDivElement | null>(null);
    const [indexVideo, setIndexVideo] = useState<number>(1);

    useEffect(() => {
        if (!videos_element.current) return;
        const videosElement = videos_element.current;
        const { clientWidth } = videosElement;
        videosElement.scrollTo({
            left: (indexVideo - 1) * clientWidth,
            behavior: 'smooth',
        });
    }, [indexVideo]);

    const handleBack = () => {
        if (indexVideo > 1) {
            setIndexVideo(indexVideo - 1);
        }
    };

    const handleNext = () => {
        if (indexVideo < 2) {
            setIndexVideo(indexVideo + 1);
        }
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.main} />
            ) : (
                <div className={style.main}>
                    <div className={style.videos} ref={videos_element}>
                        <VideoHlsOverview
                            className={style.video}
                            srcImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpao8X6PNUrN1vgwedPR0FJu_IMZdA82jIag&s"
                        />
                        <VideoHlsOverview
                            className={style.video}
                            srcImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnhFBNw9Io0hHvtv8QzH_euzwGbRJv_IC9A&s"
                        />
                    </div>
                    <div className={style.control}>
                        <IoCloseCircle className={style.close} title={CLOSE} />
                        <LiaAngleLeftSolid className={style.left} onClick={() => handleBack()} />
                        <LiaAngleRightSolid className={style.right} onClick={() => handleNext()} />
                        <div className={style.amount}>{`${indexVideo}/2`}</div>
                        <div className={style.detail}>{SEE_VIDEO}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(VideoContainer);
