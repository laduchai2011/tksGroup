import { memo, useState } from 'react';
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
import { MedicationField } from '@src/dataStruct/medication';
import { typeGroup_type } from '@src/dataStruct/medication';
import { useCreateMedicationMutation } from '@src/redux/query/medicationRTK';

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
    const [createMedication] = useCreateMedicationMutation();

    const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setMedication({ ...medication, title: value });
    };

    const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMedication({ ...medication, type: value });
    };

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setMedication({ ...medication, amount: Number(value1) });
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Số lượng nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setMedication({ ...medication, discount: Number(value1) });
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Giảm giá nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const value1 = value.trim();
        if (isPositiveInteger(value1)) {
            setMedication({ ...medication, price: Number(value1) });
        } else {
            dispatch(
                setData_toastMessage({
                    type: messageType_enum.ERROR,
                    message: 'Giá nhập vào phải là 1 số nguyên dương !',
                })
            );
        }
    };

    const handleTypeGroupChange = (typeGroup: typeGroup_type) => {
        setMedication({ ...medication, typeGroup: typeGroup });
    };

    const handleMyTextEditorChange = (value: string) => {
        setMedication({ ...medication, information: value });
    };

    const handleCreate = () => {
        const medication_cp = { ...medication };

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
                                onChange={(e) => handleTitle(e)}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={TYPE}
                                value={medication.type}
                                onChange={(e) => handleType(e)}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={AMOUNT}
                                value={medication.amount}
                                onChange={(e) => handleAmount(e)}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={`${DISCOUNT} %`}
                                value={medication.discount}
                                onChange={(e) => handleDiscount(e)}
                            />
                            <InputBasic
                                className={style.myInput}
                                header={`${PRICE} VND`}
                                value={medication.price}
                                onChange={(e) => handlePrice(e)}
                            />
                            <TypeGroup onChange={(typeGroup) => handleTypeGroupChange(typeGroup)} />
                        </div>
                    </div>
                    <div>
                        <PhotoContainer />
                    </div>
                    <div>
                        <MyTextEditor onChange={(value) => handleMyTextEditorChange(value)} />
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
