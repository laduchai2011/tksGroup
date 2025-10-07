import { memo, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { PiPhoneSlashFill } from 'react-icons/pi';
import { CLOSE, CALL } from '@src/const/text';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/redux';
import { setShow_dialogCall, setData_toastMessage } from '@src/redux/slice/Examine';
import { messageType_enum } from '@src/component/ToastMessage/type';

const DialogCall = () => {
    const dispatch = useDispatch<AppDispatch>();
    const parent_element = useRef<HTMLDivElement | null>(null);

    const isShow: boolean = useSelector((state: RootState) => state.ExamineSlice.dialogCall.isShow);

    const handleClose = () => {
        dispatch(
            setData_toastMessage({
                type: messageType_enum.NORMAL,
                message: 'Bạn đang hủy gọi !',
            })
        );

        const t = setTimeout(() => {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Hủy cuộc gọi thành công !',
                })
            );
            dispatch(setShow_dialogCall(false));
            clearTimeout(t);
        }, 3000);
    };

    useEffect(() => {
        if (isShow) {
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
                    clearTimeout(timeout);
                }
            }, 350);
        }
    }, [isShow]);

    const handleDestroyCall = () => {
        dispatch(
            setData_toastMessage({
                type: messageType_enum.NORMAL,
                message: 'Bạn đang hủy gọi !',
            })
        );

        const t = setTimeout(() => {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Hủy cuộc gọi thành công !',
                })
            );
            dispatch(setShow_dialogCall(false));
            clearTimeout(t);
        }, 3000);
    };

    return (
        <div className={style.parent} ref={parent_element}>
            {isShow && (
                <div className={style.main}>
                    <div className={style.headerContainer}>
                        <div className={style.callContainer}>
                            <FaPhoneFlip title={CALL} />
                            <div>{CALL}</div>
                        </div>
                        <IoCloseSharp className={style.closeIcon} onClick={() => handleClose()} title={CLOSE} />
                    </div>
                    <div className={style.contentContainer}>
                        <div>
                            <div className={style.textContainer}>Đang gọi ...</div>
                            <div className={style.nPhoneContainer}>
                                <PiPhoneSlashFill onClick={() => handleDestroyCall()} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(DialogCall);
