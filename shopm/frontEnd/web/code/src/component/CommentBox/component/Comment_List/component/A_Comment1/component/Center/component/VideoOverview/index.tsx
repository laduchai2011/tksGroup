import { FC, useRef, useState } from 'react';
import style from './style.module.scss';
import LazyImage from '@src/component/LazyImage';
import { SEE_VIDEO } from '@src/const/text';
import Video_Hls from './component/Video_Hls';

const VideoOverview: FC<{ src_img: string; src_video: string }> = ({ src_img, src_video }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const [btn_hover, set_btn_hover] = useState<boolean>(false);

    const handle_btn_onMouseEnter = () => {
        set_btn_hover(true);
    };

    const handle_btn_onMouseOut = () => {
        set_btn_hover(false);
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                {!btn_hover ? (
                    <div>
                        <LazyImage src={src_img} alt="" />
                    </div>
                ) : (
                    <div>
                        <Video_Hls src_video={src_video} />
                    </div>
                )}
            </div>
            <div onMouseEnter={() => handle_btn_onMouseEnter()} onMouseOut={() => handle_btn_onMouseOut()}>
                {SEE_VIDEO}
            </div>
        </div>
    );
};

export default VideoOverview;
