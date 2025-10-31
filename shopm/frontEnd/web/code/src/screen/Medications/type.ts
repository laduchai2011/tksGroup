import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

export interface state_props {
    isLoading: boolean;
    dialogMyVideo: {
        isShow: boolean;
    };
    dialogMyImage: {
        isShow: boolean;
    };
    dialogLoading: {
        isShow: boolean;
    };
    toastMessage: {
        data: ToastMessage_Data_Props;
    };
}
