import { useRef, useEffect } from 'react';
import style from './style.module.scss';
import { state_props } from './type';
import { DeleteCircle } from 'react-tks/components';
import { VIDEO, GO_TO_VIDEO, CLOSE } from '@src/const/text';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Hls, { LoaderContext, LoaderConfiguration, LoaderCallbacks } from 'hls.js';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@src/redux';
import { set_isShow, set_isShowComponent } from '@src/redux/slice/VideoPlayBox';

const VideoPlayBox = () => {
    const parent_element = useRef<HTMLImageElement | null>(null);

    const video_element = useRef<HTMLVideoElement>(null);
    const current_play_time = useRef<number>(0);
    const current_load_time = useRef<number>(0);
    const id_requestAnimationFrame = useRef<number | null>(null);
    const hls = useRef<Hls | null>(null);

    const state_store: state_props = useSelector((state: RootState) => state.VideoPlayBoxSlice);
    const dispatch = useDispatch<AppDispatch>();

    const src_video = 'http://192.168.5.100:3007/api/service_video/get/watch?id=video.mp4';

    useEffect(() => {
        const video = video_element.current;

        if (!video) return;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (Safari, iOS)
            video.src = src_video;
        } else if (Hls.isSupported()) {
            class CustomLoader extends Hls.DefaultConfig.loader {
                load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>) {
                    // Modify URL (add token)
                    const url = new URL(context.url);
                    url.searchParams.set('id', 'video.mp4');

                    context.url = url.toString(); // Gán lại URL sau khi thêm params

                    // Gọi lại loader mặc định
                    super.load(context, config, callbacks);
                }
            }

            hls.current = new Hls({
                loader: CustomLoader,
            });

            hls.current.loadSource(src_video);
            hls.current.attachMedia(video);

            hls.current.on(Hls.Events.FRAG_LOADING, (event, data) => {
                const frag = data.frag;
                current_load_time.current = frag.start;
            });

            let isLoading: boolean = true;
            function trackTime(hls: Hls) {
                current_play_time.current = video?.currentTime ? video?.currentTime : 0;

                if (video?.duration && video?.currentTime && video.duration === video.currentTime) {
                    video.pause();
                }

                // init status
                if (current_play_time.current === 0) {
                    if (current_load_time.current >= 20) {
                        hls.stopLoad();
                    }
                } else {
                    if (current_play_time.current >= current_load_time.current - 10) {
                        if (!isLoading) {
                            isLoading = true;
                            hls.startLoad();
                        }
                    } else {
                        if (isLoading) {
                            isLoading = false;
                            hls.stopLoad();
                        }
                    }
                }

                id_requestAnimationFrame.current = requestAnimationFrame(() => trackTime(hls));
            }
            trackTime(hls.current);
        }

        return () => {
            if (hls.current !== null) {
                hls.current.destroy();
            }

            if (id_requestAnimationFrame.current !== null) {
                cancelAnimationFrame(id_requestAnimationFrame.current);
                id_requestAnimationFrame.current = null;
            }

            if (video) {
                video.pause();
                video.removeAttribute('src');
                video.load();
            }
        };
    }, [src_video]);

    useEffect(() => {
        if (state_store.isShow) {
            if (parent_element.current) {
                parent_element.current.classList.add(style.parent_show_display);
            }
            const timeout = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show_opacity);
                }
                clearTimeout(timeout);
            }, 50);
        } else {
            if (parent_element.current) {
                parent_element.current.classList.remove(style.parent_show_opacity);
            }
            const timeout = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.remove(style.parent_show_display);
                }
                clearTimeout(timeout);
            }, 350);

            const timeout1 = setTimeout(() => {
                dispatch(set_isShowComponent(false));
                clearTimeout(timeout1);
            }, 400);
        }
    }, [state_store.isShow, dispatch]);

    const handleClose = () => {
        console.log('handleClose');
        dispatch(set_isShow(false));
    };

    const handle_video_index = () => {};

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.header}>
                <div>
                    <div>{VIDEO}</div>
                    <FaLongArrowAltRight title={GO_TO_VIDEO} size={25} color="#07ff00" />
                </div>
                <DeleteCircle onClick={() => handleClose()} title={CLOSE} />
            </div>
            <div className={style.main}>
                <video ref={video_element} controls autoPlay muted />
            </div>
            <div className={style.list}>
                <div>
                    <IoIosArrowDropleftCircle size={25} />
                    <div>
                        <input value={99} onChange={() => handle_video_index()} />
                        <div>/</div>
                        <div>99</div>
                    </div>
                    <IoIosArrowDroprightCircle size={25} />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayBox;
