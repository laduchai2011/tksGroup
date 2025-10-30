import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const Infor: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {/* {isLoading ? (
                <Skeleton className={style.name} />
            ) : (
                <div className={style.name}>name name name name name name name name name name name</div>
            )} */}
            <div className={style.infor}>
                {isLoading ? <Skeleton className={style.type} /> : <div className={style.type}>type</div>}
                {isLoading ? <Skeleton className={style.far} /> : <div className={style.far}>How far</div>}
            </div>
        </div>
    );
};

export default memo(Infor);
