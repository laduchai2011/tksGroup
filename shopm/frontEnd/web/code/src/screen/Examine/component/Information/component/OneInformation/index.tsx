import { FC } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { infor_type } from '../type';

const OneInformation: FC<{ field: infor_type; data: string; isLoading: boolean }> = ({ field, data, isLoading }) => {
    return (
        <div className={style.parent}>
            <div>{isLoading ? <Skeleton /> : <div>{field}</div>}</div>
            <div>{isLoading ? <Skeleton /> : <div>{data}</div>}</div>
        </div>
    );
};

export default OneInformation;
