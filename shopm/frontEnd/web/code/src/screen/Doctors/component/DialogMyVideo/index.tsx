import { memo } from 'react';
import DialogPlayVideo from '@src/component/DialogPlayVideo';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@src/redux';
import { setShow_dialogMyVideo } from '@src/redux/slice/CreateMedication';

const DialogMyVideo = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isShow: boolean = useSelector((state: RootState) => state.CreateMedicationSlice.dialogMyVideo.isShow);

    const handleClose = () => {
        dispatch(setShow_dialogMyVideo(false));
    };

    return <DialogPlayVideo isShow={isShow} onClose={() => handleClose()} />;
};

export default memo(DialogMyVideo);
