import { memo } from 'react';
import style from './style.module.scss';
import Search from './component/Search';
import List from './component/List';

const Body = () => {
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Search />
                <List />
            </div>
        </div>
    );
};

export default memo(Body);
