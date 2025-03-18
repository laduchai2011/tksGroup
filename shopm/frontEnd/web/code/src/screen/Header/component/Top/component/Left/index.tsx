import style from './style.module.scss';
import { BigDownArrow } from 'react-tks/components';

const Left = () => {
    return (
        <div className={style.left}>
            <BigDownArrow />
        </div>
    );
};

export default Left;
