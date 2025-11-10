import { memo, FC, useCallback, useState } from 'react';
import style from './style.module.scss';
import Cmt2 from '../Cmt2';
import { IoMdSend, IoMdClose } from 'react-icons/io';
import { COMMENT, SEND, CLOSE } from '@src/const/text';
import { MedicationCommentField } from '@src/dataStruct/medication';

const Cmt2Container: FC<{ isLoading: boolean; dataComment: MedicationCommentField }> = ({ isLoading, dataComment }) => {
    const [isReply, setIsReply] = useState<boolean>(false);

    const handleSend = () => {};

    const handleReply = useCallback(() => {
        setIsReply(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsReply(false);
    }, []);

    return (
        <div className={style.parent}>
            <div className={style.lineContainer} />
            <div className={style.cmt2}>
                <Cmt2 isLoading={isLoading} dataComment={dataComment} onReply={handleReply} />
                {isReply && (
                    <div className={style.replyContainer}>
                        <input placeholder={COMMENT} />
                        <div>
                            <IoMdClose onClick={handleClose} title={CLOSE} />
                            <IoMdSend onClick={() => handleSend()} title={SEND} />
                        </div>
                    </div>
                )}
                {/* <div className={style.seeMore} title={SEE_MORE}>
                    {SEE_MORE}
                </div> */}
            </div>
        </div>
    );
};

export default memo(Cmt2Container);
