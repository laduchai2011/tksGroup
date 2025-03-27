import style from './style.module.scss';
import OneNotify from './component/OneNotify';
import { IoMdSettings } from 'react-icons/io';

const Notify = () => {
    return (
        <div className={style.parent}>
            <div>
                <IoMdSettings size={25} />
            </div>
            <div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
                <div>
                    <OneNotify />
                </div>
            </div>
        </div>
    );
};

export default Notify;
