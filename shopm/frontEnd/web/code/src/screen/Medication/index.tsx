import style from './style.module.scss';
import Header from './component/Header';
import Body from './component/Body';
import MyToastMessage from './component/MyToastMessage';

const Medication = () => {
    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div>
                <MyToastMessage />
            </div>
            <div>
                <Body />
            </div>
        </div>
    );
};

export default Medication;
