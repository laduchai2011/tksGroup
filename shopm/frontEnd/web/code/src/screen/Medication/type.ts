import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';

export interface state_props {
    isLoading: boolean;
    dialogMyVideo: {
        isShow: boolean;
        data: string[];
    };
    dialogMyImage: {
        isShow: boolean;
        data: string[];
    };
    dialogCreateShoppingCart: {
        isShow: boolean;
    };
    toastMessage: {
        data: ToastMessage_Data_Props;
    };
}
