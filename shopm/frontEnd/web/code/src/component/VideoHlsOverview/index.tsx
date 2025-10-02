import { FC, memo, useRef } from 'react';
import style from './style.module.scss';
import VideoHls from '../VideoHls';
import LazyImg from '../LazyImg';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    srcVideo?: string;
    srcImage?: string;
    isPlay?: boolean;
    alt?: string;
    root?: Element | Document | null | undefined;
}

const VideoHlsOverview: FC<ComponentProps> = ({ srcVideo, srcImage, isPlay, alt, root, className, ...props }) => {
    const parent_element = useRef<HTMLDivElement>(null);

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            {!isPlay && <LazyImg className={style.image} srcImg={srcImage} alt={alt} root={root} />}
            {isPlay && <VideoHls className={style.videoHls} srcVideo={srcVideo} />}
        </div>
    );
};

export default memo(VideoHlsOverview);
