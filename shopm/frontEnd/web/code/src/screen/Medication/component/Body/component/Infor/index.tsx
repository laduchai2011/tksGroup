import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { FiveStar } from '@src/component';
import { MedicationField } from '@src/dataStruct/medication';
import { PRICE, AMOUNT, HOW_FAR, TYPE, DISCOUNT } from '@src/const/text';

const Infor: FC<{ isLoading: boolean; data: MedicationField | undefined }> = ({ isLoading, data }) => {
    return (
        data && (
            <div className={style.parent}>
                {isLoading ? (
                    <Skeleton className={style.titleLoading} />
                ) : (
                    <div className={style.title}>{data.title}</div>
                )}
                {isLoading ? (
                    <Skeleton className={style.fiveStarLoading} />
                ) : (
                    <div className={style.fiveStar}>
                        <FiveStar rate={data.averageRating} />
                    </div>
                )}
                {/* {isLoading ? <Skeleton className={style.nameLoading} /> : <div className={style.name}>name</div>} */}
                {isLoading ? (
                    <Skeleton className={style.typeLoading} />
                ) : (
                    <div className={style.type}>{`${TYPE}: ${data.type}`}</div>
                )}
                {isLoading ? (
                    <Skeleton className={style.howFarLoading} />
                ) : (
                    <div className={style.howFar}>{`${HOW_FAR}: 3KM`}</div>
                )}
                {isLoading ? (
                    <Skeleton className={style.amountLoading} />
                ) : (
                    <div className={style.amount}>{`${AMOUNT}: ${data.amount}`}</div>
                )}
                {isLoading ? (
                    <Skeleton className={style.discountLoading} />
                ) : (
                    <div className={style.discount}>{`${DISCOUNT}: ${data.discount} %`}</div>
                )}
                {isLoading ? (
                    <Skeleton className={style.moneyLoading} />
                ) : (
                    <div className={style.money}>
                        <div>{PRICE}</div>
                        <div>{data.price * (1 - data.discount / 100)}</div>
                        <div>{data.price}</div>
                        <div>VND</div>
                    </div>
                )}
            </div>
        )
    );
};

export default memo(Infor);
