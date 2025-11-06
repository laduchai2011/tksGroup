import { FC, memo, useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import { IoMdSend } from 'react-icons/io';
import { COMMENT, SEND } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import AComment from './component/AComment';
import { MedicationField, CreateMedicationCommentBodyField } from '@src/dataStruct/medication';
import { useCreateMedicationCommentMutation } from '@src/redux/query/medicationRTK';
import { AppDispatch } from '@src/redux';
import { useDispatch } from 'react-redux';
import { setData_toastMessage } from '@src/redux/slice/Medication';
import { messageType_enum } from '@src/component/ToastMessage/type';
import { useGetMedicationCommentsQuery } from '@src/redux/query/medicationRTK';

const Comment: FC<{ isLoading: boolean; data: MedicationField | undefined }> = ({ isLoading, data }) => {
    const dispatch = useDispatch<AppDispatch>();
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);

    const [newComment, setNewComment] = useState<string>('');

    const [createMedicationComment] = useCreateMedicationCommentMutation();

    useEffect(() => {
        const textareaElement = textarea_element.current;
        if (!textareaElement) return;

        function autoRow() {
            if (textareaElement) {
                textareaElement.style.height = 'auto';
                textareaElement.style.height = textareaElement.scrollHeight + 'px';
            }
        }

        textareaElement.addEventListener('input', autoRow);

        return () => {
            if (!textareaElement) return;
            textareaElement.removeEventListener('input', autoRow);
        };
    }, []);

    const {
        data: data_medicationComments,
        // isFetching,
        isLoading: isLoading_medicationComments,
        isError: isError_medicationComments,
        error: error_medicationComments,
    } = useGetMedicationCommentsQuery(
        { page: 1, size: 5, level: 0, medicationCommentId: null, medicationId: data?.id || -1 },
        { skip: !data }
    );
    useEffect(() => {
        if (isError_medicationComments && error_medicationComments) {
            console.error(error_medicationComments);
            // dispatch(
            //     setData_toastMessage({
            //         type: messageType_enum.SUCCESS,
            //         message: 'Lấy dữ liệu KHÔNG thành công !',
            //     })
            // );
        }
    }, [dispatch, isError_medicationComments, error_medicationComments]);
    useEffect(() => {
        // setIsLoading(isLoading_allShoppingCarts);
    }, [isLoading_medicationComments]);
    useEffect(() => {
        const resData = data_medicationComments;
        console.log(1111, data_medicationComments, data?.id);
        if (resData?.isSuccess && resData.data) {
            // setAllShoppingCart(resData.data);
            // const amounts1: number[] = [];
            // for (let i: number = 0; i < resData.data.length; i++) {
            //     amounts1.push(0);
            // }
            // setAmounts(amounts1);
        }
    }, [data_medicationComments, data]);

    const handleInputComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setNewComment(value);
    };

    const handleSend = () => {
        if (!data) return;

        const newCommentBody: CreateMedicationCommentBodyField = {
            content: newComment,
            level: 0,
            medicationCommentId: null,
            medicationId: data.id,
            accountId: -1,
        };

        createMedicationComment(newCommentBody)
            .then((res) => {
                const resData = res.data;
                if (resData?.isSuccess && resData.data) {
                    dispatch(
                        setData_toastMessage({
                            type: messageType_enum.SUCCESS,
                            message: 'Bạn vừa đăng 1 bình luận !',
                        })
                    );
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className={style.parent}>
            {isLoading ? <Skeleton className={style.headerLoading} /> : <div className={style.header}>{COMMENT}</div>}
            <div className={style.inputContainer}>
                <textarea
                    ref={textarea_element}
                    value={newComment}
                    onChange={(e) => handleInputComment(e)}
                    rows={1}
                    wrap="soft"
                    placeholder={COMMENT}
                />
            </div>
            <div className={style.sendBtnContainer}>
                <IoMdSend onClick={() => handleSend()} title={SEND} />
            </div>
            <AComment isLoading={isLoading} />
            <AComment isLoading={isLoading} />
            <AComment isLoading={isLoading} />
        </div>
    );
};

export default memo(Comment);
