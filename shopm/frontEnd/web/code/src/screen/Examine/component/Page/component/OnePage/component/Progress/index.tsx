import { FC, memo } from 'react';
import style from './style.module.scss';
import { CgCheck } from 'react-icons/cg';
import { LuCircleDot } from 'react-icons/lu';
import Skeleton from '@src/component/Skeleton';
import { progress_enum, progress_type } from './type';

const Progress: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const progressCurrent: progress_type = progress_enum.CUSTOMER_SEND;

    const progress_array = [progress_enum.CUSTOMER_SEND, progress_enum.DOCTOR_SEND, progress_enum.FINISH];

    const list_progress = progress_array.map((item, index) => {
        const isCheck = progressCurrent === item;
        return (
            <div key={index}>
                {isLoading ? (
                    <Skeleton className={style.progressTextLoading} />
                ) : (
                    <div className={style.progressText}>{item}</div>
                )}
                {isLoading && <Skeleton className={style.icon} />}
                {!isLoading && isCheck && <CgCheck className={`${style.finish} ${style.icon}`} />}
                {!isLoading && !isCheck && <LuCircleDot className={`${style.nfinish} ${style.icon}`} />}
            </div>
        );
    });

    return (
        <div className={style.parent}>
            <div className={style.progressContainer}>
                <div>{list_progress}</div>
            </div>
            <div className={style.statusBuyMedication}>
                {isLoading ? (
                    <Skeleton className={style.statusBuy} />
                ) : (
                    <div className={style.statusBuy}>
                        <div>Mua thuốc</div>
                        <div>Chưa</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(Progress);
