import { memo } from 'react';
import style from './style.module.scss';
import Header from './component/Header';

const OnePage = () => {
    return (
        <div className={style.parent}>
            <Header />
            <div>Content</div>
        </div>
    );
};

export default memo(OnePage);
