import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { FiveStar } from '@src/component';
import { MedicationField } from '@src/dataStruct/medication';

const Rate: FC<{ isLoading: boolean; data: MedicationField }> = ({ isLoading, data }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.fiveStar} />
            ) : (
                <div className={style.fiveStar}>
                    <FiveStar rate={data.averageRating} />
                </div>
            )}
        </div>
    );
};

export default memo(Rate);
