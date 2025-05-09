import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { LazyVideoProps } from './type';
import Skeleton from '@src/component/Skeleton';

const LazyVideo = ({ src, className, root }: LazyVideoProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoading(true);
                    observer.disconnect();
                }
            },
            {
                root: root,
            }
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, [root]);

    return (
        <div className={`${style.parent} ${className || ''}`}>
            {loading && !loaded ? (
                <Skeleton />
            ) : (
                <video className={style.image} ref={videoRef} src={src} onLoad={() => setLoaded(true)} />
            )}
        </div>
    );
};

export default LazyVideo;
