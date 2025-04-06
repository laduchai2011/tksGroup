import style from './style.module.scss';
import Header_Common from '@src/screen/Header';

const Header = () => {
    return (
        <div className={style.parent}>
            <Header_Common header__interface={{ top_isShow: false, left_isShow: true }} />
        </div>
    );
};

export default Header;
