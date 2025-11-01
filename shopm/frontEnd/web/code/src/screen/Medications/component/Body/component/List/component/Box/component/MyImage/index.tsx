import { FC, memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { MedicationField, MedicationImageField } from '@src/dataStruct/medication';
import { useGetAMedicationImageQuery } from '@src/redux/query/medicationRTK';
// import { AppDispatch } from '@src/redux';
// import { useDispatch } from 'react-redux';

const MyImage: FC<{ isLoading: boolean; data: MedicationField }> = ({ isLoading, data }) => {
    // const dispatch = useDispatch<AppDispatch>();

    const [aMedicationImage, setAMedicationImage] = useState<MedicationImageField | undefined>(undefined);

    const {
        data: data_aMedicationImage,
        // isFetching,
        isLoading: isLoading_aMedicationImage,
        isError: isError_aMedicationImage,
        error: error_aMedicationImage,
    } = useGetAMedicationImageQuery({ medicationId: data.id });
    useEffect(() => {
        if (isError_aMedicationImage && error_aMedicationImage) {
            console.error(error_aMedicationImage);
        }
    }, [isError_aMedicationImage, error_aMedicationImage]);
    useEffect(() => {
        // dispatch(setShow_dialogLoading(isLoading_medications));
    }, [isLoading_aMedicationImage]);
    useEffect(() => {
        const resData = data_aMedicationImage;
        if (resData?.isSuccess && resData.data) {
            setAMedicationImage(resData.data);
        }
    }, [data_aMedicationImage]);

    return isLoading ? (
        <Skeleton className={style.parent} />
    ) : (
        <div className={style.parent}>
            <img src={aMedicationImage?.url} alt="" />
            <div className={style.discount}>{`${data.discount}%`}</div>
        </div>
    );
};

export default memo(MyImage);
