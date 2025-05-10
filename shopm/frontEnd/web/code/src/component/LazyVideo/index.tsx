import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { LazyVideoProps } from './type';
import Skeleton from '@src/component/Skeleton';

const LazyVideo = ({ src, className, root }: LazyVideoProps) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loading, setLoading] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (!parent_element.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoading(true);

                    const timeout = setTimeout(() => {
                        setLoading(false);
                        clearTimeout(timeout);
                    }, 0);

                    observer.disconnect();
                }
            },
            {
                root: root,
            }
        );

        observer.observe(parent_element.current);

        return () => observer.disconnect();
    }, [root]);

    useEffect(() => {
        if (loading !== false) return;

        if (!videoRef.current) return;

        let isPlay: boolean = false;

        const observer_play = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!isPlay) {
                        videoRef.current?.play();
                        isPlay = true;
                    }
                } else {
                    if (isPlay) {
                        videoRef.current?.pause();
                        isPlay = false;
                    }
                }
            },
            {
                root: root,
            }
        );

        observer_play.observe(videoRef.current);

        return () => observer_play.disconnect();
    }, [root, loading]);

    return (
        <div className={`${style.parent} ${className || ''}`} ref={parent_element}>
            {loading === true && <Skeleton />}
            {loading === false && <video className={style.video} ref={videoRef} src={src} controls />}
        </div>
    );
};

export default LazyVideo;
