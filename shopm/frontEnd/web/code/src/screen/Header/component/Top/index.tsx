import style from './style.module.scss';
import Left from './component/Left';
import Center from './component/Center';
import Right from './component/Right';

const Top = () => {
    return (
        <div className={style.parent}>
            <div className={style.left}>
                <Left />
            </div>
            <div className={style.center}>
                <Center />
            </div>
            <div className={style.right}>
                <Right />
            </div>
        </div>
    );
};

export default Top;
