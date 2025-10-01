import { FC, memo } from 'react';
import style from './style.module.scss';
import { IoSend } from 'react-icons/io5';

const Send: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <IoSend />
        </div>
    );
};

export default memo(Send);
