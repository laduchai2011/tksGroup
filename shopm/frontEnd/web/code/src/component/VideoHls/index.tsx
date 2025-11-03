import { FC, memo, useRef, useEffect } from 'react';
import style from './style.module.scss';
import Hls, { LoaderContext, LoaderConfiguration, LoaderCallbacks } from 'hls.js';
// import { CutId } from './util';

interface ComponentProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    srcVideo?: string;
}

const VideoHls: FC<ComponentProps> = ({ srcVideo, className, controls = false, ...props }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playTime = useRef(0);
    const loadTime = useRef(0);
    const rAF = useRef<number | null>(null);
    const hlsRef = useRef<Hls | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !srcVideo) return;

        if (Hls.isSupported()) {
            if (hlsRef.current) hlsRef.current.destroy();

            class CustomLoader extends Hls.DefaultConfig.loader {
                load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>) {
                    const urlObj = new URL(context.url, window.location.origin);
                    context.url = urlObj.toString();
                    super.load(context, config, callbacks);
                }
            }

            const hls = new Hls({
                loader: CustomLoader,
                capLevelToPlayerSize: true,
                startLevel: -1,
            });

            hlsRef.current = hls;
            hls.loadSource(srcVideo);
            hls.attachMedia(video);

            hls.on(Hls.Events.FRAG_LOADING, (_, data) => {
                loadTime.current = data.frag.start;
            });

            let isLoading = true;
            const track = () => {
                playTime.current = video.currentTime || 0;
                if (playTime.current === 0 && loadTime.current >= 20) {
                    hls.stopLoad();
                } else if (playTime.current >= loadTime.current - 10) {
                    if (!isLoading) {
                        isLoading = true;
                        hls.startLoad();
                    }
                } else if (isLoading) {
                    isLoading = false;
                    hls.stopLoad();
                }
                rAF.current = requestAnimationFrame(track);
            };
            rAF.current = requestAnimationFrame(track);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = srcVideo;
        }

        return () => {
            if (rAF.current) cancelAnimationFrame(rAF.current);
            if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
            }
            if (video) {
                video.pause();
                video.removeAttribute('src');
                video.load();
            }
        };
    }, [srcVideo]);

    return (
        <video
            className={`${style.parent} ${className || ''}`}
            {...props}
            ref={videoRef}
            autoPlay
            muted
            controls={controls}
        />
    );
};

export default memo(VideoHls);
