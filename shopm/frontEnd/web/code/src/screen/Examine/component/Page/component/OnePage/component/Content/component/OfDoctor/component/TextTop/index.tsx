import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const TextTop: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.loading} />
            ) : (
                <div className={style.text}>
                    <span>Hãy mô tả tình trạng của bạn</span>
                    <span>Dành cho bác sĩ hoặc được sĩ</span>
                </div>
            )}
        </div>
    );
};

export default memo(TextTop);
