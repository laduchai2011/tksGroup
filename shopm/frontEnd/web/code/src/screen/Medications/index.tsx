import style from './style.module.scss';
import Header from './component/Header';

const Medications = () => {
    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div>Medications</div>
        </div>
    );
};

export default Medications;
