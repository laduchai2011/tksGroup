import { memo, useState } from 'react';
import style from './style.module.scss';
import { CREATE_MEDICATION, TITLE, TYPE, AMOUNT, PRICE, DISCOUNT } from '@src/const/text';
import InputBasic from '@src/component/InputBasic';
import TextareaBasic from '@src/component/TextareaBasic';
import TypeGroup from './component/TypeGroup';
import PhotoContainer from './component/PhotoContainer';
import { isPositiveInteger } from '@src/utility/string';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setData_toastMessage } from '@src/redux/slice/CreateMedication';
import { messageType_enum } from '@src/component/ToastMessage/type';

const Body = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [amount, setAmount] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setAmount(Number(value1));
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Số lượng nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setDiscount(Number(value1));
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Giảm giá nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setPrice(Number(value1));
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Giá nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div className={style.header}>
                    <div>{CREATE_MEDICATION}</div>
                </div>
                <div className={style.infor}>
                    <div>
                        <div>
                            <TextareaBasic className={style.myInput} header={TITLE} />
                            <InputBasic className={style.myInput} header={TYPE} />
                            <InputBasic
                                className={style.myInput}
                                header={AMOUNT}
                                value={amount}
                                onChange={(e) => handleAmount(e)}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={`${DISCOUNT} %`}
                                value={discount}
                                onChange={(e) => handleDiscount(e)}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={`${PRICE} VND`}
                                value={price}
                                onChange={(e) => handlePrice(e)}
                            />
                            <TypeGroup />
                        </div>
                    </div>
                    <div>
                        <PhotoContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Body);
