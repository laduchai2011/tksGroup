import { memo } from 'react';
import style from './style.module.scss';
import Photo from './component/Photo';
import Infor from './component/Infor';
import BuyBtn from './component/BuyBtn';
import ShoppingCart from './component/ShoppingCart';
import DocInfor from './component/DocInfor';
import Comment from './component/Comment';

const Body = () => {
    const isLoading = false;

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Photo isLoading={isLoading} />
                <Infor isLoading={isLoading} />
                <BuyBtn isLoading={isLoading} />
                <ShoppingCart isLoading={isLoading} />
                <DocInfor isLoading={isLoading} />
                <Comment isLoading={isLoading} />
            </div>
        </div>
    );
};

export default memo(Body);
