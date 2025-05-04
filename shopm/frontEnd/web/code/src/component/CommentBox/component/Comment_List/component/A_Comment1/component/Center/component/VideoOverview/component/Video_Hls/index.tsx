import { FC, useRef, useEffect } from 'react';
import style from './style.module.scss';
import Hls, { LoaderContext, LoaderConfiguration, LoaderCallbacks } from 'hls.js';

const Video_Hls: FC<{ src_video: string }> = ({ src_video }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const video_element = useRef<HTMLVideoElement>(null);
    const current_play_time = useRef<number>(0);
    const current_load_time = useRef<number>(0);
    const id_requestAnimationFrame = useRef<number | null>(null);
    const hls = useRef<Hls | null>(null);

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

    return (
        <div className={style.parent} ref={parent_element}>
            <video ref={video_element} autoPlay muted />
        </div>
    );
};

export default Video_Hls;
