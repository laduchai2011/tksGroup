import style from './style.module.scss';
import Notify from './component/Notify';

const Body = () => {
    return (
        <div className={style.parent}>
            <div>
                <Notify />
            </div>
        </div>
    );
};

export default Body;
