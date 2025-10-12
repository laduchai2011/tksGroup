import { memo } from 'react';
import style from './style.module.scss';
import Photo from './component/Photo';
import Infor from './component/Infor';
import BuyBtn from './component/BuyBtn';

const Body = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Photo isLoading={isLoading} />
                <Infor isLoading={isLoading} />
                <BuyBtn isLoading={isLoading} />
            </div>
        </div>
    );
};

export default memo(Body);
