import { FC, memo, useMemo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import VideoHlsOverview from '@src/component/VideoHlsOverview';
import Skeleton from '@src/component/Skeleton';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { IoCloseCircle } from 'react-icons/io5';
import { CLOSE, SEE_VIDEO } from '@src/const/text';

const VideoContainer: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const videos_element = useRef<HTMLDivElement | null>(null);
    const [indexVideo, setIndexVideo] = useState<number>(1);
    const [isPlay, setIsPlay] = useState<boolean>(false);

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
        if (indexVideo < 3) {
            setIndexVideo(indexVideo + 1);
        }
    };

    const handle_btn_onMouseEnter = () => {
        setIsPlay(true);
    };

    const handle_btn_onMouseOut = () => {
        setIsPlay(false);
    };

    const src_video = 'http://192.168.5.100:3007/api/service_video/get/watch?id=video.mp4';

    const list_video = useMemo(() => {
        return [1, 2, 3].map((_, index) => (
            <VideoHlsOverview
                key={index}
                className={style.video}
                srcImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpao8X6PNUrN1vgwedPR0FJu_IMZdA82jIag&s"
                srcVideo={src_video}
                isPlay={isPlay && index + 1 === indexVideo}
            />
        ));
    }, [isPlay, indexVideo]);

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.main} />
            ) : (
                <div className={style.main}>
                    <div className={style.videos} ref={videos_element}>
                        {list_video}
                    </div>
                    <div className={style.control}>
                        <IoCloseCircle className={style.close} title={CLOSE} />
                        <LiaAngleLeftSolid className={style.left} onClick={() => handleBack()} />
                        <LiaAngleRightSolid className={style.right} onClick={() => handleNext()} />
                        <div className={style.amount}>{`${indexVideo}/3`}</div>
                        <div
                            className={style.detail}
                            onMouseEnter={() => handle_btn_onMouseEnter()}
                            onMouseOut={() => handle_btn_onMouseOut()}
                        >
                            {SEE_VIDEO}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(VideoContainer);
