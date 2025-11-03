import { FC, memo, useState } from 'react';
import style from './style.module.scss';
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setData_toastMessage } from '@src/redux/slice/Medication';
import { messageType_enum } from '@src/component/ToastMessage/type';
import Skeleton from '@src/component/Skeleton';
import { ADD, SUB, BUY } from '@src/const/text';
import { isPositiveInteger } from '@src/utility/string';
import { MedicationField } from '@src/dataStruct/medication';

const BuyBtn: FC<{ isLoading: boolean; data: MedicationField | undefined }> = ({ isLoading, data }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedAmount, setSelectedAmount] = useState<number>(0);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setSelectedAmount(Number(value1));
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Số lượng nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handleAdd = () => {
        if (!data) return;
        const maxAmount = data.amount;
        if (selectedAmount < maxAmount) {
            setSelectedAmount(selectedAmount + 1);
        }
    };

    const handleSub = () => {
        if (selectedAmount > 0) {
            setSelectedAmount(selectedAmount - 1);
        }
    };

    const handleMoney = () => {
        if (!data) return;
        const allOldPrice = selectedAmount * data.price;
        const allDiscount = (allOldPrice * data.discount) / 100;
        const allNewPrice = allOldPrice - allDiscount;

        return {
            old: allOldPrice,
            new: allNewPrice,
        };
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.amountCustomLoading} />
            ) : (
                <div className={style.amountCustom}>
                    <HiOutlineMinusSmall className={style.icon} onClick={() => handleSub()} title={SUB} />
                    <div className={style.inputContainer}>
                        <input value={selectedAmount} onChange={(e) => handleAmountChange(e)} />
                    </div>
                    <HiOutlinePlusSmall className={style.icon} onClick={() => handleAdd()} title={ADD} />
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.moneyLoading} />
            ) : (
                <div className={style.money}>
                    <div className={style.new}>{handleMoney()?.new}</div>
                    <div className={style.old}>{handleMoney()?.old}</div>
                    <div className={style.moneyType}>VND</div>
                    <div className={style.note}>Tổng tiền sản phẩm</div>
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.moneyLoading} />
            ) : (
                <div className={style.money}>
                    <div className={style.new}>1000</div>
                    <div className={style.old}>1000</div>
                    <div className={style.moneyType}>VND</div>
                    <div className={style.note}>Cước vận chuyển</div>
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.moneyLoading} />
            ) : (
                <div className={style.money}>
                    <div className={style.new}>1000</div>
                    <div className={style.old}>1000</div>
                    <div className={style.moneyType}>VND</div>
                    <div className={style.note}>Tổng</div>
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.btnLoading} />
            ) : (
                <div className={style.btn} title={BUY}>
                    {BUY}
                </div>
            )}
        </div>
    );
};

export default memo(BuyBtn);
