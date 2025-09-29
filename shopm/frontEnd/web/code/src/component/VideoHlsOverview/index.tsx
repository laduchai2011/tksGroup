import { FC, memo, useRef, useEffect } from 'react';
import style from './style.module.scss';
import VideoHls from '../VideoHls';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    srcVideo?: string;
    srcImage?: string;
    alt?: string;
    root?: Element | Document | null | undefined;
    onLoaded?: () => void;
    onLoading?: () => void;
}

const VideoHlsOverview: FC<ComponentProps> = ({
    srcVideo,
    srcImage,
    alt,
    root,
    onLoaded,
    onLoading,
    className,
    ...props
}) => {
    const parent_element = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    // const [loaded, setLoaded] = useState(false);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // setLoading(true);
                    if (onLoading) {
                        onLoading();
                    }
                    observer.disconnect();
                }
            },
            {
                root: root,
            }
        );

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, [root, onLoading]);

    const handleOnLoad = () => {
        if (onLoaded) {
            onLoaded();
        }
    };

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            <img className={style.image} ref={imgRef} src={srcImage} alt={alt} onLoad={() => handleOnLoad()} />
            <VideoHls className={style.videoHls} srcVideo={srcVideo} />
        </div>
    );
};

export default memo(VideoHlsOverview);
