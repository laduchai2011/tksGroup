import style from './style.module.scss';
import Header_Common from '@src/screen/Header';
import { select_enum } from '@src/router/type';

const Header = () => {
    return (
        <div className={style.parent}>
            <Header_Common
                header__interface={{ top_isShow: false, left_isShow: true, selected: select_enum.MEDICATION }}
            />
        </div>
    );
};

export default Header;
