import style from './style.module.scss';
import avatarnull from '../../../../../../../../../asset/avatar/avatarnull.png';
import { TfiMore } from 'react-icons/tfi';

const Top = () => {
    return (
        <div className={style.parent}>
            <div>
                <img src={avatarnull} alt="avatar" />
                <div>name name name</div>
            </div>
            <div>time</div>
            <div>
                <TfiMore size={25} />
            </div>
        </div>
    );
};

export default Top;
