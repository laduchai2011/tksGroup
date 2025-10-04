import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

export interface state_props {
    isLoading: boolean;
    createPatientRecordDialog: {
        isShow: boolean;
    };
    dialogPatientSend: {
        isShow: boolean;
    };
    dialogMyVideo: {
        isShow: boolean;
    };
    dialogMyImage: {
        isShow: boolean;
    };
    toastMessage: {
        data: ToastMessage_Data_Props;
    };
}
