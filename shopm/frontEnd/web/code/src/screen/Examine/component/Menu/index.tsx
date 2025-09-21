import { FC } from 'react';
import style from './style.module.scss';

const Menu: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return <div className={style.parent}>Menu</div>;
};

export default Menu;
