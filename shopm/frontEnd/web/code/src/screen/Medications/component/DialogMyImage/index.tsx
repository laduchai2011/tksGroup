import { memo } from 'react';
import DialogPlayImage from '@src/component/DialogPlayImage';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@src/redux';
import { setShow_dialogMyImage } from '@src/redux/slice/CreateMedication';

const DialogMyImage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isShow: boolean = useSelector((state: RootState) => state.MedicationsSlice.dialogMyImage.isShow);

    const handleClose = () => {
        dispatch(setShow_dialogMyImage(false));
    };

    return <DialogPlayImage isShow={isShow} onClose={() => handleClose()} />;
};

export default memo(DialogMyImage);
