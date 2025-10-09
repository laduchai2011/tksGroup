import { FC, memo, useRef } from 'react';
import style from './style.module.scss';
import { PRESCRIBE_MEDICAtTiION } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';

const Medications: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const medications = useRef<number[]>([1, 2, 3, 4, 5]);

    const list_row = medications.current.map((_, index) => {
        return isLoading ? (
            <Skeleton className={style.row} key={index} />
        ) : (
            <div className={style.row} key={index}>
                <div className={style.index}>{index + 1}</div>
                <div className={style.name}>name</div>
                <div className={style.amount}>amount</div>
                <div className={style.note}>note</div>
            </div>
        );
    });

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.header} />
            ) : (
                <div className={style.header}>{`${PRESCRIBE_MEDICAtTiION} :`}</div>
            )}
            <div className={style.table}>{list_row}</div>
        </div>
    );
};

export default memo(Medications);
