import { FC, memo, useState, useEffect, useMemo, useCallback } from 'react';
import style from './style.module.scss';
import Cmt1 from './component/Cmt1';
import Cmt2Container from './component/Cmt2Container';
import { SEE_MORE } from '@src/const/text';
import { MedicationField, MedicationCommentField } from '@src/dataStruct/medication';
import { useGetMedicationCommentsQuery } from '@src/redux/query/medicationRTK';

const AComment: FC<{ isLoading: boolean; data: MedicationField; dataComment: MedicationCommentField }> = ({
    isLoading,
    data,
    dataComment,
}) => {
    const [page, setPage] = useState<number>(1);
    const [comments, setComments] = useState<MedicationCommentField[]>([]);

    const {
        data: data_medicationComments,
        // isFetching,
        isLoading: isLoading_medicationComments,
        isError: isError_medicationComments,
        error: error_medicationComments,
    } = useGetMedicationCommentsQuery(
        { page: page, size: 3, level: 1, medicationCommentId: dataComment.id, medicationId: data?.id || -1 },
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
    }, [isError_medicationComments, error_medicationComments]);
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

    const handleSeeMore = useCallback(() => {
        setPage((pre) => pre + 1);
    }, []);

    const list_comment = useMemo(() => {
        return [1, 2, 3].map((data1, index) => <Cmt2Container key={index} isLoading={isLoading} />);
    }, [isLoading]);

    return (
        <div className={style.parent}>
            <div className={style.cmt1}>
                <Cmt1 isLoading={isLoading} data={dataComment} />
            </div>
            {list_comment}
            <div className={style.seeMore} onClick={handleSeeMore} title={SEE_MORE}>
                {SEE_MORE}
            </div>
        </div>
    );
};

export default memo(AComment);
