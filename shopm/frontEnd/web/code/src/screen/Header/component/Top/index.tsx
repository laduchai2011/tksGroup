import style from './style.module.scss';
import Left from './component/Left';

const Top = () => {
    return (
        <div className={style.top}>
            <div className={style.left}>
                <Left />
            </div>
            <div className={style.center}>center</div>
            <div className={style.right}>right</div>
        </div>
    );
};

export default Top;
