import { FC, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import LazyImage from '@src/component/LazyImage';
import { SEE_VIDEO } from '@src/const/text';
import Hls from 'hls.js';
import { LoaderContext, LoaderConfiguration, LoaderCallbacks, FragmentLoaderContext } from 'hls.js';

const VideoOverview: FC<{ src_img: string; src_video: string }> = ({ src_img, src_video }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const video_element = useRef<HTMLVideoElement>(null);
    const [btn_hover, set_btn_hover] = useState<boolean>(true);

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
                    url.searchParams.set('ts', Date.now().toString());
                    console.log('new URL', url);

                    context.url = url.toString(); // Gán lại URL sau khi thêm params

                    // Gọi lại loader mặc định
                    super.load(context, config, callbacks);
                }
            }

            const hls = new Hls({
                loader: CustomLoader,
            });
            hls.loadSource(src_video);
            hls.attachMedia(video);

            return () => {
                hls.destroy();
            };
        }
    }, [src_video, btn_hover]);

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
                        <video ref={video_element} autoPlay controls style={{ width: '100%', height: '100%' }} />
                        {/* <video controls width="720">
                            <source src={src_video} type="video/mp2t" />
                            Your browser does not support video playback.
                        </video> */}
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
