import { FC, useRef, useEffect, useState, memo } from 'react';
import style from './style.module.scss';
import ListVideo from './component/ListVideo';
import Control from './component/Control';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    [key: string]: unknown;
}

const VideoContainer: FC<MyOptions> = ({ className, ...props }) => {
    const videos_container_element = useRef<HTMLDivElement | null>(null);
    const [root_LazyVideoWithFile, set_root_LazyVideoWithFile] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (videos_container_element.current) {
            set_root_LazyVideoWithFile(videos_container_element.current);
        }
    }, []);

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <div className={style.videoContainer} ref={videos_container_element}>
                <ListVideo option={{ root: root_LazyVideoWithFile }} />
            </div>
            <div>
                <Control />
            </div>
        </div>
    );
};

export default memo(VideoContainer);
