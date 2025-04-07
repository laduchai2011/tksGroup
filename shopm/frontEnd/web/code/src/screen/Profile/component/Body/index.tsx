import style from './style.module.scss';
import Banner from './component/Banner';
import Menu from './component/Menu';

const Body = () => {
    return (
        <div className={style.parent}>
            <div>
                <div>
                    <Banner />
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Body;
