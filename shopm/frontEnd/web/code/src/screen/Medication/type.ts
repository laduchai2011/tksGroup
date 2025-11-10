import { ToastMessage_Data_Props } from '@src/component/ToastMessage/type';
import { MedicationCommentField } from '@src/dataStruct/medication';

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
    newCmt1: MedicationCommentField | undefined;
    newCmt2: MedicationCommentField | undefined;
    toastMessage: {
        data: ToastMessage_Data_Props;
    };
}
