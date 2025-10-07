import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

export interface state_props {
    isLoading: boolean;
    createPatientRecordDialog: {
        isShow: boolean;
    };
    dialogCall: {
        isShow: boolean;
    };
    dialogPatientSend: {
        isShow: boolean;
    };
    dialogDoctorSend: {
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
