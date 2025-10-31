import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { MedicationField } from '@src/dataStruct/medication';

const MyImage: FC<{ isLoading: boolean; data: MedicationField }> = ({ isLoading, data }) => {
    return isLoading ? (
        <Skeleton className={style.parent} />
    ) : (
        <div className={style.parent}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQ9eSiMo0kQalK9RVTDNG9UN0-gwofy9cRA&s"
                alt=""
            />
            <div className={style.discount}>{`${data.discount}%`}</div>
        </div>
    );
};

export default memo(MyImage);
