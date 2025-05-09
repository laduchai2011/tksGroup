import { FC, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { Options } from './type';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';
import { ScrollImageEvent } from './handle/event';
import LazyVideo from '../LazyVideo';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    options?: Options;
    [key: string]: unknown;
}

const VideoContainer: FC<MyOptions> = ({ options, className, ...props }) => {
    const parent_element = useRef<HTMLImageElement | null>(null);
    const src_array: string[] | undefined = options?.src_array;
    const videos_container_element = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (parent_element.current && videos_container_element.current && src_array) {
            const _images_container_element = videos_container_element.current as Element;
            const index_text_element = parent_element.current.children[1].children[0].children[0] as Element;
            const left_btn_element = parent_element.current.children[1].children[1] as Element;
            const right_btn_element = parent_element.current.children[1].children[2] as Element;

            const scrollImageEvent = new ScrollImageEvent(
                _images_container_element,
                index_text_element,
                left_btn_element,
                right_btn_element,
                0,
                src_array.length
            );
            scrollImageEvent.addEventListener();

            return () => {
                scrollImageEvent.removeEventListener();
            };
        }
    }, [src_array]);

    const list_video =
        src_array &&
        src_array.map((data, index) => {
            return <LazyVideo className={style.lazyVideo} key={index} src={data} />;
        });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            <div className={style.videoContainer} ref={videos_container_element}>
                {list_video}
            </div>
            <div className={style.controlContainer}>
                <div>
                    <div>1</div>
                    <div>/</div>
                    <div>{src_array?.length}</div>
                </div>
                <TfiAngleLeft className={style.left_button} />
                <TfiAngleRight className={style.right_button} />
            </div>
        </div>
    );
};

export default VideoContainer;
