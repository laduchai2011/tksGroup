import { FC, useRef, useState, useCallback } from 'react';
import style from './style.module.scss';
import LazyImage from '@src/component/LazyImage';
import { SEE_VIDEO } from '@src/const/text';
import Video_Hls from './component/Video_Hls';
import { unstable_batchedUpdates } from 'react-dom';
import type { AppDispatch } from '@src/redux';
import { useDispatch } from 'react-redux';
import { set_id, set_isShow, set_isShowComponent } from '@src/redux/slice/VideoPlayBox';

const VideoOverview: FC<{ src_img: string; src_video: string }> = ({ src_img, src_video }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const [btn_hover, set_btn_hover] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    const handle_btn_onMouseEnter = useCallback(() => {
        set_btn_hover(true);
    }, []);

    const handle_btn_onMouseOut = useCallback(() => {
        set_btn_hover(false);
    }, []);

    const handle_see_video = () => {
        unstable_batchedUpdates(() => {
            dispatch(set_id('123'));
            dispatch(set_isShow(true));
            dispatch(set_isShowComponent(true));
        });
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
            <div
                onClick={() => handle_see_video()}
                onMouseEnter={() => handle_btn_onMouseEnter()}
                onMouseOut={() => handle_btn_onMouseOut()}
            >
                {SEE_VIDEO}
            </div>
            <div>99</div>
        </div>
    );
};

export default VideoOverview;
