import style from './style.module.scss';
import Control from './component/Control';
import PageList from './component/PageList';

const Body = () => {
    return (
        <div className={style.parent}>
            <div>
                <div>
                    <Control />
                </div>
                <div>
                    <PageList />
                </div>
            </div>
        </div>
    );
};

export default Body;
