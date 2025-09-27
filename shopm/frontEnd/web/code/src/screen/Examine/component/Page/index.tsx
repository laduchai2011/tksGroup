import { memo } from 'react';
import style from './style.module.scss';
import OnePage from './component/OnePage';

const Page = () => {
    return (
        <div className={style.parent}>
            <OnePage />
            <OnePage />
            <OnePage />
            <OnePage />
            <OnePage />
            <OnePage />
        </div>
    );
};

export default memo(Page);
