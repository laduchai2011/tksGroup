import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const TextTop: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.loading} />
            ) : (
                <div className={style.text}>Hãy mô tả tình trạng của bạn</div>
            )}
        </div>
    );
};

export default memo(TextTop);
