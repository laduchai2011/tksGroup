import style from './style.module.scss';
import Overview from './component/Overview';
import Menu from './component/Menu';

const Examine = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Overview isLoading={isLoading} />
                <Menu isLoading={isLoading} />
            </div>
        </div>
    );
};

export default Examine;
