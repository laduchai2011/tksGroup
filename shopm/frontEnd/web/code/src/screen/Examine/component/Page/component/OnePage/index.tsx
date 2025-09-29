import { memo } from 'react';
import style from './style.module.scss';
import Header from './component/Header';
import Content from './component/Content';

const OnePage = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <Header isLoading={isLoading} />
            <Content isLoading={isLoading} />
        </div>
    );
};

export default memo(OnePage);
