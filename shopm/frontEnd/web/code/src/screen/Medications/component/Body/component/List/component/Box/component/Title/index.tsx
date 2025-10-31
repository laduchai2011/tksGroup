import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { MedicationField } from '@src/dataStruct/medication';

const Title: FC<{ isLoading: boolean; data: MedicationField }> = ({ isLoading, data }) => {
    return (
        <div className={style.parent}>
            {isLoading ? <Skeleton className={style.content} /> : <div className={style.content}>{data.title}</div>}
        </div>
    );
};

export default memo(Title);
