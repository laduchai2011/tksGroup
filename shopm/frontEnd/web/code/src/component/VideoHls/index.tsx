import { FC, memo, useRef, useEffect } from 'react';
import style from './style.module.scss';
// import Hls, { LoaderContext, LoaderConfiguration, LoaderCallbacks } from 'hls.js';
import Hls from 'hls.js';
// import { CutId } from './util';

interface ComponentProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    srcVideo?: string;
    controls?: boolean;
}

const VideoHls: FC<ComponentProps> = ({ srcVideo, className, controls = false, ...props }) => {
    const parent_element = useRef<HTMLVideoElement>(null);
    // const current_play_time = useRef<number>(0);
    // const current_load_time = useRef<number>(0);
    // const id_requestAnimationFrame = useRef<number | null>(null);
    // const hls = useRef<Hls | null>(null);

    // useEffect(() => {
    //     const video = parent_element.current;

    //     if (!video) return;
    //     if (!srcVideo) return;

    //     console.log('VideoHls', srcVideo);
    //     console.log('isBrowser:', typeof window !== 'undefined');
    //     console.log('Hls.isSupported():', Hls.isSupported());

    //     const id = CutId(srcVideo);

    //     if (video.canPlayType('application/vnd.apple.mpegurl')) {
    //         console.log('canPlayType:', video.canPlayType('application/vnd.apple.mpegurl'));
    //         // Native HLS support (Safari, iOS)
    //         video.src = srcVideo;
    //     } else if (Hls.isSupported()) {
    //         console.log('isSupported', srcVideo);
    //         class CustomLoader extends Hls.DefaultConfig.loader {
    //             load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>) {
    //                 // Modify URL (add token)
    //                 const url = new URL(context.url);
    //                 url.searchParams.set('id', id);
    //                 console.log(url);

    //                 context.url = url.toString(); // Gán lại URL sau khi thêm params

    //                 // Gọi lại loader mặc định
    //                 super.load(context, config, callbacks);
    //             }
    //         }
    //         // class CustomLoader extends Hls.DefaultConfig.loader {
    //         //     load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>) {
    //         //         // Nếu là đường dẫn tương đối => chuyển thành tuyệt đối
    //         //         const absoluteURL = context.url.startsWith('http')
    //         //             ? context.url
    //         //             : `${window.location.origin}${context.url}`;

    //         //         const url = new URL(absoluteURL);
    //         //         url.searchParams.set('id', id);

    //         //         context.url = url.toString();
    //         //         super.load(context, config, callbacks);
    //         //     }
    //         // }

    //         hls.current = new Hls({
    //             loader: CustomLoader,
    //         });
    //         // hls.current = new Hls();

    //         console.log(hls.current);

    //         hls.current.loadSource(srcVideo);
    //         hls.current.attachMedia(video);

    //         hls.current.on(Hls.Events.FRAG_LOADING, (event, data) => {
    //             const frag = data.frag;
    //             current_load_time.current = frag.start;
    //         });

    //         let isLoading: boolean = true;
    //         function trackTime(hls: Hls) {
    //             current_play_time.current = video?.currentTime ? video?.currentTime : 0;

    //             // init status
    //             if (current_play_time.current === 0) {
    //                 if (current_load_time.current >= 20) {
    //                     hls.stopLoad();
    //                 }
    //             } else {
    //                 if (current_play_time.current >= current_load_time.current - 10) {
    //                     if (!isLoading) {
    //                         isLoading = true;
    //                         hls.startLoad();
    //                     }
    //                 } else {
    //                     if (isLoading) {
    //                         isLoading = false;
    //                         hls.stopLoad();
    //                     }
    //                 }
    //             }

    //             id_requestAnimationFrame.current = requestAnimationFrame(() => trackTime(hls));
    //         }
    //         trackTime(hls.current);
    //     }

    //     return () => {
    //         if (hls.current !== null) {
    //             hls.current.destroy();
    //         }

    //         if (id_requestAnimationFrame.current !== null) {
    //             cancelAnimationFrame(id_requestAnimationFrame.current);
    //             id_requestAnimationFrame.current = null;
    //         }

    //         if (video) {
    //             video.pause();
    //             video.removeAttribute('src');
    //             video.load();
    //         }
    //     };
    // }, [srcVideo]);

    useEffect(() => {
        const video = parent_element.current;
        if (!video) return;
        if (!srcVideo) return;

        if (Hls.isSupported()) {
            const hls = new Hls({
                capLevelToPlayerSize: true,
                startLevel: -1, // tự động chọn chất lượng
            });

            hls.loadSource(srcVideo);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                console.log(`Available levels: ${data.levels.map((l: any) => l.height).join(', ')}p`);
            });

            return () => hls.destroy();
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari
            video.src = srcVideo;
        }
    }, [srcVideo]);

    return (
        <video
            className={`${style.parent} ${className || ''}`}
            {...props}
            ref={parent_element}
            autoPlay
            muted
            controls={controls}
        />
    );
};

export default memo(VideoHls);
