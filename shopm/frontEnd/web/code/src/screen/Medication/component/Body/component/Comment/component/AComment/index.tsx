import { FC, memo } from 'react';
import style from './style.module.scss';
import Cmt1 from './component/Cmt1';
import Cmt2 from './component/Cmt2';
import { SEE_MORE } from '@src/const/text';

const AComment: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <div className={style.cmt1}>
                <Cmt1 isLoading={isLoading} />
            </div>
            <div className={style.cmt2Container}>
                <div className={style.lineContainer} />
                <div className={style.cmt2}>
                    <Cmt2 isLoading={isLoading} />
                    <div className={style.seeMore} title={SEE_MORE}>
                        {SEE_MORE}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(AComment);
