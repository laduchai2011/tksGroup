import style from './style.module.scss';
import Overview from './component/Overview';

const Examine = () => {
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Overview isLoading={false} />
            </div>
        </div>
    );
};

export default Examine;
