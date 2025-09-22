import { FC } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { IoMdAdd } from 'react-icons/io';
import { IoAddCircleOutline } from 'react-icons/io5';
import { CREATE_PATIENT_RECORD, CREATE_NEW_PAGE } from '@src/const/text';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@src/redux';
import { setShow_createPatientRecordDialog } from '@src/redux/slice/Examine';

const Menu: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleCreatePatientRecord = () => {
        dispatch(setShow_createPatientRecordDialog(true));
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.btn} />
            ) : (
                <div className={`${style.btn} ${style.btnCreate}`} onClick={() => handleCreatePatientRecord()}>
                    <IoMdAdd />
                    <div>{CREATE_PATIENT_RECORD}</div>
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.btn} />
            ) : (
                <div className={`${style.btn} ${style.btnNewPage}`}>
                    <IoAddCircleOutline color="white" />
                    <div>{CREATE_NEW_PAGE}</div>
                </div>
            )}
        </div>
    );
};

export default Menu;
