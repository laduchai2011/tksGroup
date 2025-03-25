import style from './style.module.scss';
import { IoSearch } from 'react-icons/io5';
import { SEARCH } from '@src/const/text';

const Left = () => {
    return (
        <div className={style.parent}>
            <div>
                <input placeholder={SEARCH} />
                <IoSearch size={30} />
            </div>
        </div>
    );
};

export default Left;
