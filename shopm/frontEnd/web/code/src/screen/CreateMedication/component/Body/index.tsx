import { memo, useState, useCallback } from 'react';
import style from './style.module.scss';
import { CREATE_MEDICATION, TITLE, TYPE, AMOUNT, PRICE, DISCOUNT, CREATE } from '@src/const/text';
import InputBasic from '@src/component/InputBasic';
import TextareaBasic from '@src/component/TextareaBasic';
import TypeGroup from './component/TypeGroup';
import PhotoContainer from './component/PhotoContainer';
import MyTextEditor from './component/MyTextEditor';
import { isPositiveInteger } from '@src/utility/string';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux';
import { setData_toastMessage, setShow_dialogLoading } from '@src/redux/slice/CreateMedication';
import { messageType_enum } from '@src/component/ToastMessage/type';
import {
    MedicationField,
    typeGroup_type,
    CreateMedicationField,
    MedicationImageField,
} from '@src/dataStruct/medication';
import { useCreateMedicationMutation } from '@src/redux/query/medicationRTK';
import { BASE_URL } from '@src/const/api/baseUrl';
import { IMAGE_API } from '@src/const/api/image';
import { VIDEO_API } from '@src/const/api/video';
import axiosInstance from '@src/api/axiosInstance';

const isProduct = process.env.NODE_ENV === 'production';
const apiString = isProduct ? '' : '/api';

interface aFileField {
    filename: string;
    mimetype: string;
    path: string;
    size: number;
}
interface UploadMultipleImageResponse {
    message: string;
    files: aFileField[];
}

const Body = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [medication, setMedication] = useState<MedicationField>({
        id: -1,
        title: '',
        type: '',
        typeGroup: '',
        information: '',
        averageRating: 0,
        rateCount: 0,
        amount: 0,
        discount: 0,
        price: 0,
        status: 'normal',
        userId: 0,
        updateTime: '',
        createTime: '',
    });
    const [localImages, setLocalImages] = useState<File[]>([]);
    const [localVideos, setLocalVideos] = useState<File[]>([]);

    const [createMedication] = useCreateMedicationMutation();

    const handleTitle = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setMedication((prev) => ({ ...prev, title: value }));
    }, []);

    const handleType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMedication((prev) => ({ ...prev, type: value }));
    }, []);

    const handleAmount = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const value1 = value.trim();
            if (isPositiveInteger(value1)) {
                setMedication((prev) => ({ ...prev, amount: Number(value1) }));
            } else {
                dispatch(
                    setData_toastMessage({
                        type: messageType_enum.ERROR,
                        message: 'Số lượng nhập vào phải là 1 số nguyên dương !',
                    })
                );
            }
        },
        [dispatch]
    );

    const handleDiscount = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const value1 = value.trim();
            if (isPositiveInteger(value1)) {
                setMedication((prev) => ({ ...prev, discount: Number(value1) }));
            } else {
                dispatch(
                    setData_toastMessage({
                        type: messageType_enum.ERROR,
                        message: 'Giảm giá nhập vào phải là 1 số nguyên dương !',
                    })
                );
            }
        },
        [dispatch]
    );

    const handlePrice = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const value1 = value.trim();
            if (isPositiveInteger(value1)) {
                setMedication((prev) => ({ ...prev, price: Number(value1) }));
            } else {
                dispatch(
                    setData_toastMessage({
                        type: messageType_enum.ERROR,
                        message: 'Giá nhập vào phải là 1 số nguyên dương !',
                    })
                );
            }
        },
        [dispatch]
    );

    const handleTypeGroupChange = useCallback((typeGroup: typeGroup_type) => {
        setMedication((prev) => ({ ...prev, typeGroup: typeGroup }));
    }, []);

    const handleMyTextEditorChange = useCallback((value: string) => {
        setMedication((prev) => ({ ...prev, information: value }));
    }, []);

    const handleUploadMultipleImages = async (files: File[]): Promise<UploadMultipleImageResponse | null> => {
        if (!files || files.length === 0) return null;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('images', file); // 👈 key này phải trùng với backend
        });

        try {
            const res = await axiosInstance.post<UploadMultipleImageResponse>(
                IMAGE_API.UPLOAD_MULTIPLE_IMAGE, // hoặc vẫn là UPLOAD_AIMAGE nếu backend tự detect
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (progressEvent) => {
                        const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1));
                        console.log(`Đang tải lên: ${percent}%`);
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.error('Upload thất bại:', error);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Đăng tải hình ảnh thất bại !',
                })
            );
            return null;
        }
    };

    const handleUploadMultipleVideos = async (files: File[]): Promise<UploadMultipleImageResponse | null> => {
        if (!files || files.length === 0) return null;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('videos', file); // 👈 key này phải trùng với backend
        });

        try {
            const res = await axiosInstance.post<UploadMultipleImageResponse>(
                VIDEO_API.UPLOAD_MULTIPLE_VIDEOS,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (progressEvent) => {
                        const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 1));
                        console.log(`Đang tải lên: ${percent}%`);
                    },
                }
            );
            return res.data;
        } catch (error) {
            console.error('Upload thất bại:', error);
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Đăng tải hình ảnh thất bại !',
                })
            );
            return null;
        }
    };

    const handleCreate = async () => {
        const medication_cp = { ...medication };

        const createMedicationBody: CreateMedicationField = {
            medication: medication_cp,
            images: [],
            videos: [],
        };

        const resData_images = await handleUploadMultipleImages(localImages);
        if (resData_images === null) return;

        const imageFiles = resData_images.files;
        const imageUrls: MedicationImageField[] = [];
        for (let i: number = 0; i < imageFiles.length; i++) {
            const url = `${BASE_URL}${apiString}/service_image/store/image/${imageFiles[i].filename}`;
            const aImage: MedicationImageField = {
                id: -1,
                url: url,
                medicationId: -1,
                updateTime: '',
                createTime: '',
            };
            imageUrls.push(aImage);
        }

        const resData_videos = await handleUploadMultipleVideos(localVideos);
        if (resData_videos === null) return;
        console.log(1111111, resData_videos);

        createMedicationBody.images = imageUrls;

        dispatch(setShow_dialogLoading(true));
        const timout = setTimeout(() => {
            dispatch(setShow_dialogLoading(false));
            clearTimeout(timout);
        }, 5000);
    };

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div className={style.header}>
                    <div>{CREATE_MEDICATION}</div>
                </div>
                <div className={style.infor}>
                    <div>
                        <div>
                            <TextareaBasic
                                className={style.myInput}
                                header={TITLE}
                                value={medication.title}
                                onChange={handleTitle}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={TYPE}
                                value={medication.type}
                                onChange={handleType}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={AMOUNT}
                                value={medication.amount}
                                onChange={handleAmount}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={`${DISCOUNT} %`}
                                value={medication.discount}
                                onChange={handleDiscount}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={`${PRICE} VND`}
                                value={medication.price}
                                onChange={handlePrice}
                            />
                            <TypeGroup onChange={handleTypeGroupChange} />
                        </div>
                    </div>
                    <div>
                        <PhotoContainer
                            localImages={localImages}
                            setLocalImages={setLocalImages}
                            localVideos={localVideos}
                            setLocalVideos={setLocalVideos}
                        />
                    </div>
                    <div>
                        <MyTextEditor onChange={handleMyTextEditorChange} />
                    </div>
                    <div className={style.createBtn}>
                        <div onClick={() => handleCreate()}>{CREATE}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Body);
