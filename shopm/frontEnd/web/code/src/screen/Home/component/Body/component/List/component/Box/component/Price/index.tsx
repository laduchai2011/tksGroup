import { FC } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const Price: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <div>
                {isLoading ? <Skeleton className={style.skeleton} /> : <div className={style.distance}>5 km</div>}
                {isLoading ? <Skeleton className={style.skeleton} /> : <div className={style.price}>5000000 vnd</div>}
            </div>
        </div>
    );
};

export default Price;
