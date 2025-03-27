import style from './style.module.scss';
import { IoNotifications } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import avatarnull from '../../../../../../asset/avatar/avatarnull.png';
import Header from './component/Header';
import Body from './component/Body';

const Right = () => {
    return (
        <div className={style.parent}>
            <div>
                <div className={style.iconContainer}>
                    <IoNotifications size={30} color="greenyellow" />
                    <div>99</div>
                </div>
                <div className={style.iconContainer}>
                    <FaRegMessage size={30} />
                    <div>99</div>
                </div>
                <div className={style.avatarContainer}>
                    <img src={avatarnull} alt="avatar" />
                    <div>Name</div>
                </div>
            </div>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Body />
                </div>
            </div>
        </div>
    );
};

export default Right;
