import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { FiveStar } from '@src/component';

const Infor: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.titleLoading} />
            ) : (
                <div className={style.title}>Title Title Title Title Title</div>
            )}
            {isLoading ? (
                <Skeleton className={style.fiveStarLoading} />
            ) : (
                <div className={style.fiveStar}>
                    <FiveStar rate={5} />
                </div>
            )}
            {isLoading ? <Skeleton className={style.nameLoading} /> : <div className={style.name}>name</div>}
            {isLoading ? <Skeleton className={style.typeLoading} /> : <div className={style.type}>type</div>}
            {isLoading ? <Skeleton className={style.howFarLoading} /> : <div className={style.howFar}>far</div>}
            {isLoading ? <Skeleton className={style.amountLoading} /> : <div className={style.amount}>amount</div>}
            {isLoading ? (
                <Skeleton className={style.moneyLoading} />
            ) : (
                <div className={style.money}>
                    <div>1000</div>
                    <div>old</div>
                    <div>VND</div>
                </div>
            )}
        </div>
    );
};

export default memo(Infor);
