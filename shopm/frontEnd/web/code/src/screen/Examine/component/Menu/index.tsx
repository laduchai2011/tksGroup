import { FC } from 'react';
import style from './style.module.scss';
import { IoMdAdd } from 'react-icons/io';

const Menu: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <div>
                <IoMdAdd />
                <div>Tạo bệnh án</div>
            </div>
        </div>
    );
};

export default Menu;
