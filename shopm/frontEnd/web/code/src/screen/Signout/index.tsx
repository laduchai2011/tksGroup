import { useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import { SIGNOUT } from '@src/const/text';
import Loading from '@src/component/Loading';
import { LoadProps, LineCircleLoadProps } from '@src/component/Loading/type';
import { LOAD_COMPONENTS_CONST } from '@src/component/Loading/const';
import { useSignoutMutation } from '@src/redux/query/accountRTK';

const Signout = () => {
    const overlay_element = useRef<HTMLDivElement | null>(null);
    const [isSignouting, setIsSignouting] = useState<boolean>(false);

    const [signout] = useSignoutMutation();

    useEffect(() => {
        if (!overlay_element.current) return;
        const overlayElement = overlay_element.current;

        if (isSignouting) {
            overlayElement.classList.add(style.display);
            const timeout1 = setTimeout(() => {
                overlayElement.classList.add(style.opacity);
                clearTimeout(timeout1);
            }, 50);
        } else {
            overlayElement.classList.remove(style.opacity);
            const timeout2 = setTimeout(() => {
                overlayElement.classList.remove(style.display);
                clearTimeout(timeout2);
            }, 550);
        }
    }, [isSignouting]);

    const handleSignout = () => {
        setIsSignouting(true);
        // const timeout = setTimeout(() => {
        //     setIsSignouting(false);
        //     clearTimeout(timeout);
        // }, 5000);
        signout()
            .then((res) => {
                const resData = res.data;
                console.log(resData);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsSignouting(false));
    };

    const lineCircleLoad: LineCircleLoadProps = {
        lineSize: 3,
        lineBackgroundColor: 'blue',
        circleSize: 50,
    };

    const load: LoadProps = {
        type: LOAD_COMPONENTS_CONST.LOADING_TYPE.LINE_CIRCLE,
        infor: lineCircleLoad,
    };

    return (
        <div className={style.parent}>
            <div className={style.overlay} ref={overlay_element}>
                <Loading className={style.loadding} load={load} />
            </div>
            <div className={style.main}>
                <div onClick={() => handleSignout()}>{SIGNOUT}</div>
            </div>
        </div>
    );
};

export default Signout;
