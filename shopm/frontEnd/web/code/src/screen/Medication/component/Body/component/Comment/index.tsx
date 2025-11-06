import { FC, memo, useRef, useEffect, useState, useMemo } from 'react';
import style from './style.module.scss';
import { IoMdSend } from 'react-icons/io';
import { COMMENT, SEND, SEE_MORE } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import AComment from './component/AComment';
import { MedicationField, CreateMedicationCommentBodyField, MedicationCommentField } from '@src/dataStruct/medication';
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
    const [comments, setComments] = useState<MedicationCommentField[]>([]);
    const [page, setPage] = useState<number>(1);

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
        { page: page, size: 5, level: 0, medicationCommentId: null, medicationId: data?.id || -1 },
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
        if (resData?.isSuccess && resData.data) {
            // const data1 = comments.concat(resData.data.items);
            const data1 = resData.data.items;
            setComments((pre) => pre.concat(data1));
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

    const handleGetMoreComments = () => {
        setPage((pre) => pre + 1);
    };

    const list_comment = useMemo(() => {
        if (!data) return;
        return comments.map((data1, index) => (
            <AComment key={index} isLoading={isLoading} data={data} dataComment={data1} />
        ));
    }, [data, comments, isLoading]);

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
            {list_comment}
            <div className={style.moreContainer}>
                <div onClick={() => handleGetMoreComments()} title={SEE_MORE}>
                    {SEE_MORE}
                </div>
            </div>
        </div>
    );
};

export default memo(Comment);
