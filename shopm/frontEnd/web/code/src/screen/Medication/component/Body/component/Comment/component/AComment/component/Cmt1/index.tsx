import { FC, memo, useState } from 'react';
import style from './style.module.scss';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiReplyFill } from 'react-icons/ri';
import { IoMdSend, IoMdClose } from 'react-icons/io';
import { LIKE, DIS_LIKE, REPLY, COMMENT, SEND, CLOSE } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import { MedicationField, MedicationCommentField, CreateMedicationCommentBodyField } from '@src/dataStruct/medication';
import { useCreateMedicationCommentMutation } from '@src/redux/query/medicationRTK';
import { AppDispatch } from '@src/redux';
import { useDispatch } from 'react-redux';
import { setData_toastMessage, setNewCmt2 } from '@src/redux/slice/Medication';
import { messageType_enum } from '@src/component/ToastMessage/type';
import { unstable_batchedUpdates } from 'react-dom';

const Cmt1: FC<{ isLoading: boolean; data: MedicationField; dataComment: MedicationCommentField }> = ({
    isLoading,
    data,
    dataComment,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [isReply, setIsReply] = useState<boolean>(false);
    const [newCmt, setNewCmt] = useState<string>('');
    const [createMedicationComment] = useCreateMedicationCommentMutation();

    const handleReply = () => {
        setIsReply(true);
    };

    const handleCloseCmtInput = () => {
        setIsReply(false);
    };

    const handleNewCmtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewCmt(value);
    };

    const handleSend = () => {
        const createMedicationCommentBody: CreateMedicationCommentBodyField = {
            content: newCmt,
            level: 1,
            medicationCommentId: dataComment.id,
            medicationId: data.id,
            accountId: -1,
        };

        createMedicationComment(createMedicationCommentBody)
            .then((res) => {
                const resData = res.data;
                if (resData?.isSuccess && resData.data) {
                    const data2 = resData.data;
                    unstable_batchedUpdates(() => {
                        dispatch(
                            setData_toastMessage({
                                type: messageType_enum.SUCCESS,
                                message: 'Bạn vừa đăng 1 bình luận !',
                            })
                        );
                        dispatch(setNewCmt2(data2));
                    });
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className={style.parent}>
            <div className={style.cmtMain}>
                <div className={style.cmtContainer}>
                    <div className={style.avatarContainer}>
                        {isLoading ? (
                            <Skeleton className={style.imageLoading} />
                        ) : (
                            <img
                                className={style.image}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhId1mEa3Owha9YB8m1QPCqfmIiyiN8IYOw&s"
                                alt=""
                            />
                        )}
                    </div>
                    <div className={style.contentContainer}>
                        {isLoading ? (
                            <Skeleton className={style.userNameLoading} />
                        ) : (
                            <div className={style.userName}>name</div>
                        )}
                        {isLoading ? (
                            <Skeleton className={style.contentLoading} />
                        ) : (
                            <div className={style.content}>{dataComment.content}</div>
                        )}
                        <div className={style.btnsContainer}>
                            <div className={style.btnContainer}>
                                {isLoading ? (
                                    <Skeleton className={style.btnSvgLoading} />
                                ) : (
                                    <AiFillLike className={style.btnSvg} title={LIKE} />
                                )}
                                {isLoading ? (
                                    <Skeleton className={style.btnTxtLoading} />
                                ) : (
                                    <div className={style.btnTxt}>{dataComment.likeAmount}</div>
                                )}
                            </div>
                            <div className={style.btnContainer}>
                                {isLoading ? (
                                    <Skeleton className={style.btnSvgLoading} />
                                ) : (
                                    <AiFillDislike className={style.btnSvg} title={DIS_LIKE} />
                                )}
                                {isLoading ? (
                                    <Skeleton className={style.btnTxtLoading} />
                                ) : (
                                    <div className={style.btnTxt}>{dataComment.dislikeAmount}</div>
                                )}
                            </div>
                            <div className={style.btnContainer}>
                                {isLoading ? (
                                    <Skeleton className={style.btnSvgLoading} />
                                ) : (
                                    <RiReplyFill className={style.btnSvg} onClick={() => handleReply()} title={REPLY} />
                                )}
                                {/* {isLoading ? (
                                <Skeleton className={style.btnTxtLoading} />
                            ) : (
                                <div className={style.btnTxt}>100</div>
                            )} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.menuContainer}>
                    {isLoading ? <Skeleton className={style.menuLoading} /> : <BsThreeDots className={style.menu} />}
                </div>
            </div>
            {isReply && (
                <div className={style.replyContainer}>
                    <input value={newCmt} onChange={(e) => handleNewCmtChange(e)} placeholder={COMMENT} />
                    <div>
                        <IoMdClose onClick={() => handleCloseCmtInput()} title={CLOSE} />
                        <IoMdSend onClick={() => handleSend()} title={SEND} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(Cmt1);
