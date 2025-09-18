import style from './style.module.scss';
import Overview from './component/Overview';
import Information from './component/Information';
import Title from './component/Title';
import Icon from './component/Icon';

const Box = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <Overview isLoading={isLoading} />
            <Information isLoading={isLoading} />
            <Title isLoading={isLoading} />
            <Icon isLoading={isLoading} />
        </div>
    );
};

export default Box;
