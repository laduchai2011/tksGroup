import { memo } from 'react';
import style from './style.module.scss';
import Header from './component/Header';
import Progress from './component/Progress';
import ProgressChange from './component/ProgressChange';
import Content from './component/Content';

const OnePage = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <Header isLoading={isLoading} />
            <Progress isLoading={isLoading} />
            <ProgressChange isLoading={isLoading} />
            <Content isLoading={isLoading} />
        </div>
    );
};

export default memo(OnePage);
