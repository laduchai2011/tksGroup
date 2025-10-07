import { FC, memo } from 'react';
import style from './style.module.scss';
import { IoSend } from 'react-icons/io5';
import { SEND } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@src/redux';
import { setShow_dialogDoctorSend } from '@src/redux/slice/Examine';

const Send: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleShowDialog = () => {
        dispatch(setShow_dialogDoctorSend(true));
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.sendIcon} />
            ) : (
                <IoSend className={style.sendIcon} onClick={() => handleShowDialog()} title={SEND} />
            )}
        </div>
    );
};

export default memo(Send);
