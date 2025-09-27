import { memo } from 'react';
import style from './style.module.scss';

const Header = () => {
    return (
        <div className={style.parent}>
            <div>99</div>
            <div>Header</div>
        </div>
    );
};

export default memo(Header);
