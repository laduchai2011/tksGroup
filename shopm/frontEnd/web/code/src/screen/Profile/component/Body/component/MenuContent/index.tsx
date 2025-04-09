import style from './style.module.scss';
import Diary from './Diary';

const MenuContent = () => {
    return (
        <div className={style.parent}>
            <div>
                <Diary />
            </div>
        </div>
    );
};

export default MenuContent;
