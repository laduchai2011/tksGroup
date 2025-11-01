import { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import Box from './component/Box';
import { useGetMedicationsQuery } from '@src/redux/query/medicationRTK';
import { MedicationField } from '@src/dataStruct/medication';
import { setShow_dialogLoading, setData_toastMessage } from '@src/redux/slice/Medications';
import { messageType_enum } from '@src/component/ToastMessage/type';
import { AppDispatch } from '@src/redux';
import { useDispatch } from 'react-redux';

const List = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [medications, setMedications] = useState<MedicationField[]>([]);

    const {
        data: data_medications,
        // isFetching,
        isLoading: isLoading_medications,
        isError: isError_medications,
        error: error_medications,
    } = useGetMedicationsQuery({ page: 1, size: 20 });
    useEffect(() => {
        if (isError_medications && error_medications) {
            console.error(error_medications);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Lấy dữ liệu KHÔNG thành công !',
                })
            );
        }
    }, [dispatch, isError_medications, error_medications]);
    useEffect(() => {
        dispatch(setShow_dialogLoading(isLoading_medications));
    }, [dispatch, isLoading_medications]);
    useEffect(() => {
        const resData = data_medications;
        if (resData?.isSuccess && resData.data) {
            setMedications(resData.data.items);
        }
    }, [dispatch, data_medications]);

    const list_medication = medications.map((data, index) => {
        return (
            <div key={index}>
                <Box data={data} />
            </div>
        );
    });

    return (
        <div className={style.parent}>
            <div className={style.main}>{list_medication}</div>
        </div>
    );
};

export default memo(List);
