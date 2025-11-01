import { FC, memo, useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setShow_dialogMyImage, setShow_dialogMyVideo } from '@src/redux/slice/Medication';
import { MedicationField, MedicationImageField, MedicationVideoField } from '@src/dataStruct/medication';
import { useGetAllMedicationImagesQuery, useGetAllMedicationVideosQuery } from '@src/redux/query/medicationRTK';
import { setData_toastMessage } from '@src/redux/slice/Medication';
import { messageType_enum } from '@src/component/ToastMessage/type';

const Photo: FC<{ isLoading: boolean; data: MedicationField | undefined }> = ({ isLoading, data }) => {
    const dispatch = useDispatch<AppDispatch>();
    const photoContainer_element = useRef<HTMLDivElement | null>(null);
    const [view, setView] = useState<string>('image');
    const [allMedicationImages, setAllMedicationImages] = useState<MedicationImageField[]>([]);
    const [allMedicationVideos, setAllMedicationVideos] = useState<MedicationVideoField[]>([]);

    useEffect(() => {
        if (!photoContainer_element.current) return;
        const photoContainerElement = photoContainer_element.current;
        const { clientWidth } = photoContainerElement;
        let index = 0;
        if (view === 'image') {
            index = 0;
        }
        if (view === 'video') {
            index = 1;
        }
        photoContainerElement.scrollTo({
            left: index * clientWidth,
            behavior: 'smooth',
        });
    }, [view]);

    const {
        data: data_allMedicationImages,
        // isFetching,
        isLoading: isLoading_allMedicationImages,
        isError: isError_allMedicationImages,
        error: error_allMedicationImages,
    } = useGetAllMedicationImagesQuery({ medicationId: data?.id });
    useEffect(() => {
        if (isError_allMedicationImages && error_allMedicationImages) {
            console.error(error_allMedicationImages);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Lấy dữ liệu KHÔNG thành công !',
                })
            );
        }
    }, [dispatch, isError_allMedicationImages, error_allMedicationImages]);
    useEffect(() => {
        // setIsLoading(isLoading_medication);
    }, [isLoading_allMedicationImages]);
    useEffect(() => {
        const resData = data_allMedicationImages;
        if (resData?.isSuccess && resData.data) {
            setAllMedicationImages(resData.data);
        }
    }, [data_allMedicationImages]);

    const {
        data: data_allMedicationVideos,
        // isFetching,
        isLoading: isLoading_allMedicationVideos,
        isError: isError_allMedicationVideos,
        error: error_allMedicationVideos,
    } = useGetAllMedicationVideosQuery({ medicationId: data?.id });
    useEffect(() => {
        if (isError_allMedicationVideos && error_allMedicationVideos) {
            console.error(error_allMedicationVideos);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.SUCCESS,
                    message: 'Lấy dữ liệu KHÔNG thành công !',
                })
            );
        }
    }, [dispatch, isError_allMedicationVideos, error_allMedicationVideos]);
    useEffect(() => {
        // setIsLoading(isLoading_medication);
    }, [isLoading_allMedicationVideos]);
    useEffect(() => {
        const resData = data_allMedicationVideos;
        if (resData?.isSuccess && resData.data) {
            setAllMedicationVideos(resData.data);
        }
    }, [data_allMedicationVideos]);

    const handleShowDialogPhoto = () => {
        if (view === 'image') {
            dispatch(setShow_dialogMyImage(true));
        }
        if (view === 'video') {
            dispatch(setShow_dialogMyVideo(true));
        }
    };

    return isLoading || allMedicationImages.length === 0 || allMedicationVideos.length === 0 ? (
        <Skeleton className={style.parentLoading} />
    ) : (
        <div className={style.parent}>
            <div className={style.photoContainer} ref={photoContainer_element}>
                <img className={style.photo} src={allMedicationImages[0].url} alt="" />
                <video className={style.photo} src={allMedicationVideos[0].url} controls />
            </div>
            <div className={style.controlContainer}>
                <div className={style.dotContainer}>
                    <div className={style.circle}>
                        <div className={style.dot} onClick={() => handleShowDialogPhoto()} />
                    </div>
                </div>
                <div className={style.options}>
                    <div className={style.option} onClick={() => setView('image')}>
                        Image
                    </div>
                    <div className={style.option} onClick={() => setView('video')}>
                        Video
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Photo);
