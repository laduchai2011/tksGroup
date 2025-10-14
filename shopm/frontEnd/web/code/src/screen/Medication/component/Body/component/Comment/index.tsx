import { FC, memo } from 'react';
import style from './style.module.scss';
import { COMMENT } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import AComment from './component/AComment';

const Comment: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? <Skeleton className={style.headerLoading} /> : <div className={style.header}>{COMMENT}</div>}
            <AComment isLoading={isLoading} />
            <AComment isLoading={isLoading} />
            <AComment isLoading={isLoading} />
        </div>
    );
};

export default memo(Comment);
