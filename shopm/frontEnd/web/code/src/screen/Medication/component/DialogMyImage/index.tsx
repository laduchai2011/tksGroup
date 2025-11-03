import { memo } from 'react';
import DialogPlayImage from '@src/component/DialogPlayImage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/redux';
import { setShow_dialogMyImage } from '@src/redux/slice/Medication';

const DialogMyImage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isShow: boolean = useSelector((state: RootState) => state.MedicationSlice.dialogMyImage.isShow);
    const data: string[] = useSelector((state: RootState) => state.MedicationSlice.dialogMyImage.data);

    const handleClose = () => {
        dispatch(setShow_dialogMyImage(false));
    };

    return <DialogPlayImage isShow={isShow} data={data} onClose={() => handleClose()} />;
};

export default memo(DialogMyImage);
