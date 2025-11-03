import { memo, useRef } from 'react';
import style from './style.module.scss';

const DialogCreateShoppingCart = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.main}>DialogCreateShoppingCart</div>
        </div>
    );
};

export default memo(DialogCreateShoppingCart);
