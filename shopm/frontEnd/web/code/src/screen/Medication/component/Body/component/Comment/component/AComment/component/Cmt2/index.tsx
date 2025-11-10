import { FC, memo } from 'react';
import style from './style.module.scss';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiReplyFill } from 'react-icons/ri';
import { LIKE, DIS_LIKE, REPLY } from '@src/const/text';
import Skeleton from '@src/component/Skeleton';
import { MedicationCommentField } from '@src/dataStruct/medication';

const Cmt2: FC<{ isLoading: boolean; dataComment: MedicationCommentField; onReply: () => void }> = ({
    isLoading,
    dataComment,
    onReply,
}) => {
    const handleReply = () => {
        onReply();
    };

    return (
        <div className={style.parent}>
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
                                <div className={style.btnTxt}>100</div>
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
                                <div className={style.btnTxt}>100</div>
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
    );
};

export default memo(Cmt2);
