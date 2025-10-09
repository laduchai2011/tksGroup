import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const Title: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.content} />
            ) : (
                <div className={style.content}>
                    Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
                    Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
                    Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
                    Title Title Title Title Title Title Title Title Title Title Title Title
                </div>
            )}
        </div>
    );
};

export default memo(Title);
