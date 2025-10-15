import { memo } from 'react';
import style from './style.module.scss';

const Body = () => {
    const isLoading = false;

    return (
        <div className={style.parent}>
            <div className={style.main}></div>
        </div>
    );
};

export default memo(Body);
