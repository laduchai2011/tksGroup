import { memo } from 'react';
import style from './style.module.scss';
import Photo from './component/Photo';

const Body = () => {
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Photo />
            </div>
        </div>
    );
};

export default memo(Body);
