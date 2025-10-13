import { FC, memo, useState } from 'react';
import style from './style.module.scss';
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';
import { SHOPPING_CART, ADD, SUB } from '@src/const/text';
import { isPositiveInteger } from '@src/utility/string';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setData_toastMessage } from '@src/redux/slice/Medication';
import { messageType_enum } from '@src/component/ToastMessage/type';

const ShoppingCart: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [amount, setAmount] = useState<number>(0);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <div className={style.header}>{SHOPPING_CART}</div>
            <div className={style.table}>
                <div className={style.rowContainer}>
                    <div className={style.row}>
                        <div className={style.index}>index</div>
                        <div className={style.title}>
                            name name name name name name name name name name name name name name name name name name
                        </div>
                        <div className={style.total}>1000 VND</div>
                        <div className={style.amountCustom}>
                            <HiOutlineMinusSmall className={style.icon} title={SUB} />
                            <div className={style.inputContainer}>
                                <input value={amount} onChange={(e) => handleAmountChange(e)} />
                            </div>
                            <HiOutlinePlusSmall className={style.icon} title={ADD} />
                        </div>
                        <div className={style.money}>
                            <div className={style.new}>1000</div>
                            <div className={style.old}>1000</div>
                            <div className={style.moneyType}>VND</div>
                        </div>
                        <div className={style.btnContainer}>
                            <div>{ADD}</div>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.index}>index</div>
                        <div className={style.title}>name</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ShoppingCart);
