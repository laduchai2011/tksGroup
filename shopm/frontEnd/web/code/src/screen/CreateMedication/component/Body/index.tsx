import { memo, useState } from 'react';
import style from './style.module.scss';
import { CREATE_MEDICATION, TITLE, TYPE, AMOUNT } from '@src/const/text';
import InputBasic from '@src/component/InputBasic';
import TextareaBasic from '@src/component/TextareaBasic';
import TypeGroup from './component/TypeGroup';
import ImageContainer from './component/ImageContainer';
import { isPositiveInteger } from '@src/utility/string';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setData_toastMessage } from '@src/redux/slice/CreateMedication';
import { messageType_enum } from '@src/component/ToastMessage/type';

const Body = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [amount, setAmount] = useState<number>(0);

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
                                value={amount.toString()}
                                onChange={(e) => handleAmount(e)}
                            />
                            <TypeGroup />
                        </div>
                    </div>
                    <div>
                        <ImageContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Body);
