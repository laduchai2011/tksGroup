import { useRef, useEffect, useState, memo } from 'react';
import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';
import { CLOSE, CREATE_PATIENT_RECORD, TITLE, CREATE, EXIT } from '@src/const/text';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/redux';
import { setShow_createPatientRecordDialog, setData_toastMessage } from '@src/redux/slice/Examine';
import { messageType_enum } from '@src/component/ToastMessage/type';

const CreatePatientRecordDialog = () => {
    const dispatch = useDispatch<AppDispatch>();
    const parent_element = useRef<HTMLDivElement | null>(null);

    // text 1
    const content_element = useRef<HTMLDivElement | null>(null);
    const text1_element = useRef<HTMLDivElement | null>(null);
    const inputRowContainer_element = useRef<HTMLDivElement | null>(null);

    // text 2
    const btn_element = useRef<HTMLDivElement | null>(null);
    const text2_element = useRef<HTMLDivElement | null>(null);
    const btnContainer_element = useRef<HTMLDivElement | null>(null);

    const isShow: boolean = useSelector((state: RootState) => state.ExamineSlice.createPatientRecordDialog.isShow);
    const [isCreating, setIsCreating] = useState<boolean>(false);

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
        if (isCreating) {
            //-------------text1-----------
            if (inputRowContainer_element.current) {
                inputRowContainer_element.current.classList.add(style.inputRowContainer_hidden);
            }
            if (text1_element.current) {
                text1_element.current.classList.add(style.text1_display);
            }
            const timeout1 = setTimeout(() => {
                if (text1_element.current) {
                    text1_element.current.classList.add(style.text1_opacity);
                }
                if (content_element.current) {
                    content_element.current.classList.add(style.content_isCreate);
                }
                clearTimeout(timeout1);
            }, 50);

            //-------------text2-----------
            if (btnContainer_element.current) {
                btnContainer_element.current.classList.add(style.btnContainer_hidden);
            }
            if (text2_element.current) {
                text2_element.current.classList.add(style.text2_display);
            }
            const timeout2 = setTimeout(() => {
                if (text2_element.current) {
                    text2_element.current.classList.add(style.text2_opacity);
                }
                if (btn_element.current) {
                    btn_element.current.classList.add(style.btn_isCreate);
                }
                clearTimeout(timeout2);
            }, 50);
        } else {
            //-------------text1-----------
            if (inputRowContainer_element.current) {
                inputRowContainer_element.current.classList.remove(style.inputRowContainer_hidden);
            }
            if (text1_element.current) {
                text1_element.current.classList.remove(style.text1_opacity);
            }
            if (content_element.current) {
                content_element.current.classList.remove(style.content_isCreate);
            }
            const timeout1 = setTimeout(() => {
                if (text1_element.current) {
                    text1_element.current.classList.remove(style.text1_display);
                }
                clearTimeout(timeout1);
            }, 550);

            //-------------text2-----------
            if (btnContainer_element.current) {
                btnContainer_element.current.classList.remove(style.btnContainer_hidden);
            }
            if (text2_element.current) {
                text2_element.current.classList.remove(style.text2_opacity);
            }
            if (btn_element.current) {
                btn_element.current.classList.remove(style.btn_isCreate);
            }
            const timeout2 = setTimeout(() => {
                if (text2_element.current) {
                    text2_element.current.classList.remove(style.text2_display);
                }
                clearTimeout(timeout2);
            }, 550);
        }
    }, [isCreating]);

    const handleClose = () => {
        dispatch(setShow_createPatientRecordDialog(false));
    };

    const handleCreate = () => {
        setIsCreating(true);
        const timeout = setTimeout(() => {
            setIsCreating(false);
            clearTimeout(timeout);
        }, 3000);
    };

    const handleExit = () => {
        dispatch(setData_toastMessage({ type: messageType_enum.SUCCESS, message: 'toast message' }));
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.main}>
                <div className={style.header}>
                    <div>{CREATE_PATIENT_RECORD}</div>
                    <div>
                        <IoClose title={CLOSE} onClick={() => handleClose()} />
                    </div>
                </div>
                <div className={style.content} ref={content_element}>
                    <div className={style.text1} ref={text1_element}>
                        Vui lòng chờ ... !
                    </div>
                    <div className={style.inputRowContainer} ref={inputRowContainer_element}>
                        <div className={style.inputRow}>
                            <div>{TITLE}</div>
                            <div>
                                <input />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.btn} ref={btn_element}>
                    <div className={style.text2} ref={text2_element}>
                        Bệnh án đang được tạo !!!
                    </div>
                    <div className={style.btnContainer} ref={btnContainer_element}>
                        <div onClick={() => handleCreate()}>{CREATE}</div>
                        <div onClick={() => handleExit()}>{EXIT}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CreatePatientRecordDialog);
