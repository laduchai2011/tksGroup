import { FC } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { infor_type } from '../type';

const OneInformation: FC<{ field: infor_type; data: string; isLoading: boolean }> = ({ field, data, isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? <Skeleton className={style.field} /> : <div className={style.field}>{field}</div>}
            {isLoading ? <Skeleton className={style.content} /> : <div className={style.content}>{data}</div>}
        </div>
    );
};

export default OneInformation;
