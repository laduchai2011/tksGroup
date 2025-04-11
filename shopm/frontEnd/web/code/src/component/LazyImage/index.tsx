import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { LazyImageProps } from './type';

const LazyImage = ({ src, alt, className, placeholder }: LazyImageProps) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <img
            className={`${style.parent} ${className || ''}`}
            ref={imgRef}
            src={isVisible ? src : placeholder || ''}
            alt={alt}
            onLoad={() => setLoaded(true)}
            style={{
                filter: loaded ? 'none' : 'blur(20px)',
                transition: 'filter 0.3s ease-out',
            }}
        />
    );
};

export default LazyImage;
