import { FC, useRef } from 'react';
import style from './style.module.scss';
import { Options } from './type';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    options?: Options;
    [key: string]: unknown;
}

const VideoContainer: FC<MyOptions> = ({ options, className, ...props }) => {
    const parent_element = useRef<HTMLImageElement | null>(null);

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            VideoContainer
        </div>
    );
};

export default VideoContainer;
