import { FC, memo } from 'react';
import style from './style.module.scss';
import { INFORMATION } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import { MedicationField } from '@src/dataStruct/medication';

const DocInfor: FC<{ isLoading: boolean; data: MedicationField | undefined }> = ({ isLoading, data }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.headerLoading} />
            ) : (
                <div className={style.header}>{INFORMATION}</div>
            )}
            {isLoading ? (
                <Skeleton className={style.inforLoading} />
            ) : (
                <div className={style.infor}>{data?.information}</div>
            )}
        </div>
    );
};

export default memo(DocInfor);
