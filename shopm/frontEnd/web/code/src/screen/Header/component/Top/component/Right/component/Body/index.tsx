import style from './style.module.scss';
import Notify from './component/Notify';
import Message from './component/Message';

const Body = () => {
    return (
        <div className={style.parent}>
            <div>
                <Notify />
            </div>
            <div>
                <Message />
            </div>
        </div>
    );
};

export default Body;
