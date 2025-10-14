import { FC, memo } from 'react';
import style from './style.module.scss';
import Cmt1 from './component/Cmt1';
// import Cmt2 from './component/Cmt2';

const AComment: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <div></div>
            <Cmt1 isLoading={isLoading} />
            {/* <Cmt2 isLoading={isLoading} />
            <Cmt2 isLoading={isLoading} /> */}
        </div>
    );
};

export default memo(AComment);
