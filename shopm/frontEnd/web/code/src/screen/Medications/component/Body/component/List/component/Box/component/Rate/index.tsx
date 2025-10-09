import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { FiveStar } from '@src/component';

const Rate: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.fiveStar} />
            ) : (
                <div className={style.fiveStar}>
                    <FiveStar rate={5} />
                </div>
            )}
        </div>
    );
};

export default memo(Rate);
