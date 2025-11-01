import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { MedicationField } from '@src/dataStruct/medication';

const Price: FC<{ isLoading: boolean; data: MedicationField }> = ({ isLoading, data }) => {
    return (
        <div className={style.parent}>
            <div className={style.price}>
                {isLoading ? (
                    <Skeleton className={style.newLoading} />
                ) : (
                    <span className={style.new}>{data.price}</span>
                )}
                {isLoading ? (
                    <Skeleton className={style.oldLoading} />
                ) : (
                    <span className={style.old}>{data.price}</span>
                )}
                {!isLoading && <div className={style.priceText}>VND</div>}
            </div>
            <div className={style.amount}>
                <div className={style.amount1}>
                    {isLoading ? (
                        <Skeleton className={style.amount2Loading} />
                    ) : (
                        <span className={style.amount2}>{data.amount}</span>
                    )}
                    {!isLoading && <span className={style.amountText}>Còn</span>}
                </div>
            </div>
        </div>
    );
};

export default memo(Price);
