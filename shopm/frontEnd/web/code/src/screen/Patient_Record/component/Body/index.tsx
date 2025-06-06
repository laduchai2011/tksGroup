import { useState } from 'react';
import style from './style.module.scss';
import Control from './component/Control';
import PageList from './component/PageList';

const Body = () => {
    const [page, setPage] = useState<number>(1);
    return (
        <div className={style.parent}>
            <Control option={{ page: page, setPage: setPage }} />
            <PageList option={{ page: page, setPage: setPage }} />
        </div>
    );
};

export default Body;
