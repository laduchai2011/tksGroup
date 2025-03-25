import style from './style.module.scss';
import { IoNotifications } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import avatarnull from '../../../../../../asset/avatar/avatarnull.png';

const Right = () => {
    return (
        <div className={style.parent}>
            <div>
                <div>
                    <IoNotifications size={30} color="greenyellow" />
                </div>
                <div>
                    <FaRegMessage size={30} />
                </div>
                <div>
                    <img src={avatarnull} alt="avatar" />
                </div>
            </div>
        </div>
    );
};

export default Right;
