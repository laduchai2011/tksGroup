import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import Photo from './component/Photo';
import Infor from './component/Infor';
import BuyBtn from './component/BuyBtn';
import ShoppingCart from './component/ShoppingCart';
import DocInfor from './component/DocInfor';
import Comment from './component/Comment';
import { useGetAMedicationQuery } from '@src/redux/query/medicationRTK';
import { MedicationField } from '@src/dataStruct/medication';
import { setData_toastMessage } from '@src/redux/slice/Medications';
import { messageType_enum } from '@src/component/ToastMessage/type';
import { AppDispatch } from '@src/redux';
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [medication, setMedication] = useState<MedicationField | undefined>(undefined);
    const { id } = useParams<{ id: string }>();

    const {
        data: data_medication,
        // isFetching,
        isLoading: isLoading_medication,
        isError: isError_medication,
        error: error_medication,
    } = useGetAMedicationQuery({ page: 0, size: 0, id: Number(id) });
    useEffect(() => {
        if (isError_medication && error_medication) {
            console.error(error_medication);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Lấy dữ liệu KHÔNG thành công !',
                })
            );
        }
    }, [dispatch, isError_medication, error_medication]);
    useEffect(() => {
        setIsLoading(isLoading_medication);
    }, [isLoading_medication]);
    useEffect(() => {
        const resData = data_medication;
        if (resData?.isSuccess && resData.data) {
            setMedication(resData.data);
        }
    }, [data_medication]);

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Photo isLoading={isLoading} data={medication} />
                <Infor isLoading={isLoading} />
                <BuyBtn isLoading={isLoading} />
                <ShoppingCart isLoading={isLoading} />
                <DocInfor isLoading={isLoading} />
                <Comment isLoading={isLoading} />
            </div>
        </div>
    );
};

export default memo(Body);
