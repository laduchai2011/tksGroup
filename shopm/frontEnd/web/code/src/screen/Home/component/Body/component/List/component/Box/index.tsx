import style from './style.module.scss';
import Overview from './component/Overview';
import Information from './component/Information';

const Box = () => {
    return (
        <div className={style.parent}>
            <Overview />
            <Information />
        </div>
    );
};

export default Box;
