import { memo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { CLOSE, SEND, EXIT, SEND_TREATMENT } from '@src/const/text';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/redux';
import { setShow_dialogDoctorSend, setData_toastMessage } from '@src/redux/slice/Examine';
import { messageType_enum } from '@src/component/ToastMessage/type';

const DialogPatientSend = () => {
    const dispatch = useDispatch<AppDispatch>();
    const parent_element = useRef<HTMLDivElement | null>(null);

    // text 1
    const contentContainer_element = useRef<HTMLDivElement | null>(null);
    const text1_element = useRef<HTMLDivElement | null>(null);
    const content_element = useRef<HTMLDivElement | null>(null);

    // text 2
    const btnContainer_element = useRef<HTMLDivElement | null>(null);
    const text2_element = useRef<HTMLDivElement | null>(null);
    const btns_element = useRef<HTMLDivElement | null>(null);

    const isShow: boolean = useSelector((state: RootState) => state.ExamineSlice.dialogDoctorSend.isShow);
    const [sending, setSending] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);
    const [content, setContent] = useState<string>('');

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

    useEffect(() => {
        // text 1
        if (!contentContainer_element.current) return;
        if (!text1_element.current) return;
        if (!content_element.current) return;
        const contentContainerElement = contentContainer_element.current;
        const text1Element = text1_element.current;
        const contentElement = content_element.current;

        // text 2
        if (!btnContainer_element.current) return;
        if (!text2_element.current) return;
        if (!btns_element.current) return;
        const btnContainerElement = btnContainer_element.current;
        const text2Element = text2_element.current;
        const btnsElement = btns_element.current;

        if (sending) {
            // text 1
            contentContainerElement.classList.add(style.content_isSend);
            text1Element.classList.add(style.text1_show_display);
            text1Element.classList.add(style.text1_show_opacity);
            contentElement.classList.add(style.content_hidden_opacity);

            // text 2
            btnContainerElement.classList.add(style.btns_isSend);
            text2Element.classList.add(style.text2_show_display);
            text2Element.classList.add(style.text2_show_opacity);
            btnsElement.classList.add(style.btns_hidden_opacity);
        } else {
            // text 1
            contentContainerElement.classList.remove(style.contentContainer_isSend);
            text1Element.classList.remove(style.text1_show_opacity);
            contentElement.classList.remove(style.content_hidden_opacity);
            const timeout1 = setTimeout(() => {
                text1Element.classList.remove(style.text1_show_display);
                clearTimeout(timeout1);
            }, 550);

            // text 2
            btnContainerElement.classList.remove(style.btnContainer_isSend);
            text2Element.classList.remove(style.text2_show_opacity);
            btnsElement.classList.remove(style.btns_hidden_opacity);
            const timeout2 = setTimeout(() => {
                text2Element.classList.remove(style.text2_show_display);
                clearTimeout(timeout2);
            }, 550);
        }
    }, [sending]);

    useEffect(() => {
        if (isSent) {
            setContent('Nội dung điều trị đã được gửi !');
        } else {
            setContent('Sau khi gửi bạn sẽ không thể thay đổi nội dung này. Ban có muốn gửi không ?');
        }
    }, [isSent]);

    const handleSend = () => {
        if (isSent) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.WARN,
                    message: 'Nội dung điều trị đã được gửi, không thể gửi lại !',
                })
            );
        } else {
            setSending(true);

            const timeout = setTimeout(() => {
                setSending(false);
                setIsSent(true);
                clearTimeout(timeout);
            }, 5000);
        }
    };

    const handleClose = () => {
        dispatch(setShow_dialogDoctorSend(false));
    };

    const handleExit = () => {
        dispatch(setShow_dialogDoctorSend(false));
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.main}>
                <div className={style.headerContainer}>
                    <div className={style.header}>{SEND_TREATMENT}</div>
                    <IoCloseSharp className={style.closeIcon} onClick={() => handleClose()} title={CLOSE} />
                </div>
                <div className={style.contentContainer} ref={contentContainer_element}>
                    <div className={style.text1} ref={text1_element}>
                        Vui lòng chờ ... !
                    </div>
                    <div className={style.content} ref={content_element}>
                        {content}
                    </div>
                </div>
                <div className={style.btnContainer} ref={btnContainer_element}>
                    <div className={style.text2} ref={text2_element}>
                        Nội dung điều trị đang được gửi !!!
                    </div>
                    <div className={style.btns} ref={btns_element}>
                        <div className={style.btn} onClick={() => handleSend()}>
                            {SEND}
                        </div>
                        <div className={style.btn} onClick={() => handleExit()}>
                            {EXIT}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DialogPatientSend);
