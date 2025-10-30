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
    typeGroup_enum,
    typeGroup_type,
    CreateMedicationBodyField,
    MedicationImageField,
    MedicationVideoField,
} from '@src/dataStruct/medication';
import { AImageFileField, AVideoFileField } from '@src/dataStruct/photo';
import { MyResponse } from '@src/dataStruct/response';
import { useCreateMedicationMutation } from '@src/redux/query/medicationRTK';
import { BASE_URL } from '@src/const/api/baseUrl';
import { IMAGE_API } from '@src/const/api/image';
import { VIDEO_API } from '@src/const/api/video';
import axiosInstance from '@src/api/axiosInstance';

const isProduct = process.env.NODE_ENV === 'production';
const apiString = isProduct ? '' : '/api';

const Body = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [medication, setMedication] = useState<MedicationField>({
        id: -1,
        title: '',
        type: '',
        typeGroup: typeGroup_enum.NORMAL,
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

    const handleUploadMultipleImages = async (files: File[]): Promise<MyResponse<AImageFileField[]> | null> => {
        if (!files || files.length === 0) return null;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('images', file); // 👈 key này phải trùng với backend
        });

        try {
            const res = await axiosInstance.post<MyResponse<AImageFileField[]>>(
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

    const handleUploadMultipleVideos = async (files: File[]): Promise<MyResponse<AVideoFileField[]> | null> => {
        if (!files || files.length === 0) return null;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('videos', file); // 👈 key này phải trùng với backend
        });

        try {
            const res = await axiosInstance.post<MyResponse<AVideoFileField[]>>(
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

    const handlePreTitle = () => {
        const title = medication.title.trim();
        if (title.length === 0) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Tiêu đề không được để trống !',
                })
            );
        } else {
            return title;
        }
    };
    const handlePreType = () => {
        const type = medication.type.trim();
        if (type.length === 0) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Loại thuốc không được để trống !',
                })
            );
        } else {
            return type;
        }
    };
    const handlePreAmount = () => {
        const amount = medication.amount;
        if (amount === 0) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.WARN,
                    message: 'Số lượng thuốc bạn đang để là 0 !',
                })
            );
        } else {
            return amount;
        }
    };
    const handlePrePrice = () => {
        const price = medication.price;
        if (price === 0) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.WARN,
                    message: 'Giá thuốc bạn đang để là 0 !',
                })
            );
        } else {
            return price;
        }
    };
    const handlePreImages = async () => {
        const resData_images = await handleUploadMultipleImages(localImages);
        if (resData_images === null) return;
        const imageFiles = resData_images.data;
        if (!imageFiles) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Đăng tải những hình ảnh thất bại !',
                })
            );
            return;
        }
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

        return imageUrls;
    };
    const handlePreVideos = async () => {
        const resData_videos = await handleUploadMultipleVideos(localVideos);
        if (resData_videos === null) return;
        const videoFiles = resData_videos.data;
        if (!videoFiles) {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Đăng tải những thước phim thất bại !',
                })
            );
            return;
        }
        const videoUrls: MedicationVideoField[] = [];
        for (let i: number = 0; i < videoFiles.length; i++) {
            const url = `${BASE_URL}${apiString}/service_image/store/image/${videoFiles[i].savedName}`;
            const aVideo: MedicationVideoField = {
                id: -1,
                url: url,
                medicationId: -1,
                updateTime: '',
                createTime: '',
            };
            videoUrls.push(aVideo);
        }

        return videoUrls;
    };
    const handleCreate = async () => {
        const medication_cp = { ...medication };

        const preTitle = handlePreTitle();
        if (!preTitle) return;

        const preType = handlePreType();
        if (!preType) return;

        handlePreAmount();

        handlePrePrice();

        const imageUrls: MedicationImageField[] | undefined = await handlePreImages();

        const videoUrls: MedicationVideoField[] | undefined = await handlePreVideos();

        const createMedicationBody: CreateMedicationBodyField = {
            medication: medication_cp,
            images: imageUrls ? imageUrls : [],
            videos: videoUrls ? videoUrls : [],
        };

        dispatch(setShow_dialogLoading(true));
        createMedication(createMedicationBody)
            .then((res) => {
                const resData = res.data;
                if (resData?.isSuccess) {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.SUCCESS,
                            message: 'Đăng tải thuốc thành công !',
                        })
                    );
                } else {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.ERROR,
                            message: 'Đăng tải thuốc thất bại !',
                        })
                    );
                }
            })
            .catch((err) => {
                console.error(err);
                dispatch(
                    setData_toastMessage({
                        type: messageType_enum.SUCCESS,
                        message: 'Đăng tải thuốc thất bại !',
                    })
                );
            })
            .finally(() => dispatch(setShow_dialogLoading(false)));
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
                            <TypeGroup value={medication.typeGroup} onChange={handleTypeGroupChange} />
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
