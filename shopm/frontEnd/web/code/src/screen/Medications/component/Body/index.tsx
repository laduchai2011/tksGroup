import { memo } from 'react';
import style from './style.module.scss';
import Filter from './component/Filter';
import List from './component/List';

const Body = () => {
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Filter />
                <List />
            </div>
        </div>
    );
};

export default memo(Body);
