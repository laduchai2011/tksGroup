import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { LazyImageProps } from './type';
import Skeleton from '../Skeleton';

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLoading(true);
                observer.disconnect();
            }
        });

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`${style.parent} ${className || ''}`}>
            {loading && !loaded ? (
                <Skeleton />
            ) : (
                <img className={style.image} ref={imgRef} src={src} alt={alt} onLoad={() => setLoaded(true)} />
            )}
        </div>
    );
};

export default LazyImage;
