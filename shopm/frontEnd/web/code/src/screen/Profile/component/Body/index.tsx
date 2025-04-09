import style from './style.module.scss';
import Banner from './component/Banner';
import Menu from './component/Menu';
import MenuContent from './component/MenuContent';

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
                <div>
                    <MenuContent />
                </div>
            </div>
        </div>
    );
};

export default Body;
