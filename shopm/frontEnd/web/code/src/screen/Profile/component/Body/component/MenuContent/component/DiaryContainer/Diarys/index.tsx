import style from './style.module.scss';
import Diary from './component/Diary';

const Diarys = () => {
    return (
        <div className={style.parent}>
            <Diary />
            <Diary />
            <Diary />
            <Diary />
        </div>
    );
};

export default Diarys;
