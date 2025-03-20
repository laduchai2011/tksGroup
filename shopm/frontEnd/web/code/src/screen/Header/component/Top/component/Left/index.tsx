import style from './style.module.scss';
import { BigRightArrow } from 'react-tks/components';

const Left = () => {
    return (
        <div className={style.left}>
            <BigRightArrow />
        </div>
    );
};

export default Left;
