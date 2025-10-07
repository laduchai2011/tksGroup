import { FC, memo } from 'react';
import style from './style.module.scss';

const ProgressChange: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return <div className={style.parent}>ProgressChange</div>;
};

export default memo(ProgressChange);
