import { memo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { CREATE_SHOPPING_CART, CLOSE, NAME, CREATE, EXIT } from '@src/const/text';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/redux';
import { setShow_dialogCreateShoppingCart, setData_toastMessage } from '@src/redux/slice/Medication';
import { CreateShoppingCartBodyField } from '@src/dataStruct/shoppingCart';
import { useCreateShoppingCartMutation } from '@src/redux/query/shoppingCartRTK';
import { messageType_enum } from '@src/component/ToastMessage/type';

const DialogCreateShoppingCart = () => {
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

    const [createShoppingCart] = useCreateShoppingCartMutation();

    const isShow: boolean = useSelector((state: RootState) => state.MedicationSlice.dialogCreateShoppingCart.isShow);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [createShoppingCartBody, setCreateShoppingCartBody] = useState<CreateShoppingCartBodyField>({
        name: '',
        accountId: -1,
    });

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
            }, 550);
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
        dispatch(setShow_dialogCreateShoppingCart(false));
    };

    const handleCreate = () => {
        setIsCreating(true);
        createShoppingCart(createShoppingCartBody)
            .then((res) => {
                const resData = res.data;
                if (resData?.isSuccess) {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.SUCCESS,
                            message: 'Tạo giỏ hàng thành công !',
                        })
                    );
                } else {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.SUCCESS,
                            message: 'Tạo giỏ hàng không thành công !',
                        })
                    );
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setIsCreating(false));
    };

    const handleExit = () => {
        dispatch(setShow_dialogCreateShoppingCart(false));
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCreateShoppingCartBody({ ...createShoppingCartBody, name: value });
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.main}>
                <div className={style.headerContainer}>
                    <div className={style.header}>{CREATE_SHOPPING_CART}</div>
                    <IoCloseSharp className={style.closeIcon} onClick={() => handleClose()} title={CLOSE} />
                </div>
                <div className={style.content} ref={content_element}>
                    <div className={style.text1} ref={text1_element}>
                        Vui lòng chờ ... !
                    </div>
                    <div className={style.inputRowContainer} ref={inputRowContainer_element}>
                        <div className={style.inputRow}>
                            <div>{NAME}</div>
                            <div>
                                <input value={createShoppingCartBody.name} onChange={(e) => handleNameChange(e)} />
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

export default memo(DialogCreateShoppingCart);
