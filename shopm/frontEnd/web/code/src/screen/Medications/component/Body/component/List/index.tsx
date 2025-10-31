import { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import Box from './component/Box';
import { useGetMedicationsQuery } from '@src/redux/query/medicationRTK';
import { MedicationField } from '@src/dataStruct/medication';

const List = () => {
    // const [getMedications] = useGetMedicationsMutation();

    const [medications, setMedications] = useState<MedicationField[]>([]);

    // useEffect(() => {
    //     getMedications({ page: 1, size: 5 })
    //         .then((res) => {
    //             const resData = res.data;
    //             console.log(resData);
    //         })
    //         .catch((err) => console.error(err));
    // }, [getMedications]);

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
        }
    }, [isError_medications, error_medications]);
    // useEffect(() => {
    //     dispatch(set_isLoading(isLoading_))
    // }, [dispatch, isLoading_])
    // useEffect(() => {
    //     setData(data_?.data)
    // }, [data_])

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
                <div>
                    <Box />
                </div>
            </div>
        </div>
    );
};

export default memo(List);
