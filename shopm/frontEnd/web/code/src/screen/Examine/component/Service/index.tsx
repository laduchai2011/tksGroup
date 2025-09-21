import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const Service: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? <Skeleton className={style.title} /> : <div className={style.title}>Title</div>}
            <div className={style.price}>
                <div>
                    {isLoading ? <Skeleton className={style.price1} /> : <div className={style.price1}>5 km</div>}
                    {isLoading ? (
                        <Skeleton className={style.price1} />
                    ) : (
                        <div className={style.price1}>1000000 VND</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(Service);
