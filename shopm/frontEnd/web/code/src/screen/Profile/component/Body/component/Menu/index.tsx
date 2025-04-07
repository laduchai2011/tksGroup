import style from './style.module.scss';
import { MdReadMore } from 'react-icons/md';

const Menu = () => {
    return (
        <div className={style.parent}>
            <div className={style.icon}>
                <MdReadMore size={30} />
            </div>
            <div className={style.list}></div>
            <div className={style.setting}></div>
        </div>
    );
};

export default Menu;
