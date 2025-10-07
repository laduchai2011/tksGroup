import { FC, memo, useState, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import Skeleton from '@src/component/Skeleton';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@src/redux';
import { setShow_dialogCall } from '@src/redux/slice/Examine';

const Header: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const dispatch = useDispatch<AppDispatch>();
    const main2_element = useRef<HTMLDivElement | null>(null);
    const [view, setView] = useState<boolean>(false);
    const [myLoading, setMyLoading] = useState<boolean>(false);

    useEffect(() => {
        setMyLoading(isLoading);
    }, [isLoading]);

    useEffect(() => {
        if (main2_element.current) {
            if (view) {
                main2_element.current.classList.add(style.main2_show);
            } else {
                main2_element.current.classList.remove(style.main2_show);
            }
        }
    }, [view]);

    const handleCall = () => {
        dispatch(setShow_dialogCall(true));
    };

    const handleOpenView = () => {
        setView(false);
    };

    const handleCloseView = () => {
        setView(true);
    };

    return (
        <div className={style.parent}>
            <div className={style.main1}>
                <div className={style.index}>
                    {myLoading ? (
                        <Skeleton className={style.indexNumber} />
                    ) : (
                        <div className={style.indexNumber}>99</div>
                    )}
                </div>
                <div className={style.title}>
                    {myLoading ? (
                        <Skeleton className={`${style.titleContent} ${style.titleContentLoading}`} />
                    ) : (
                        <div className={style.titleContent}>Header</div>
                    )}
                </div>
                <div className={style.icons}>
                    {myLoading ? (
                        <Skeleton className={style.iconLoading} />
                    ) : (
                        <div>
                            <FaPhone className={style.icon} onClick={() => handleCall()} />
                        </div>
                    )}
                    {myLoading ? (
                        <Skeleton className={style.iconLoading} />
                    ) : (
                        <div>
                            {view && <AiOutlineEye className={style.icon} onClick={() => handleOpenView()} />}
                            {!view && (
                                <AiOutlineEyeInvisible className={style.icon} onClick={() => handleCloseView()} />
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className={style.main2} ref={main2_element}>
                Header
            </div>
        </div>
    );
};

export default memo(Header);
