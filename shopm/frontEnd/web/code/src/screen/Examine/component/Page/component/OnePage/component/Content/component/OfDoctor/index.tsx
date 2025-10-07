import { FC, memo } from 'react';
import style from './style.module.scss';
import TextTop from './component/TextTop';
import MyTextEditor from './component/MyTextEditor';
import Medications from './component/Medications';
import Send from './component/Send';

const OfDoctor: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <TextTop isLoading={isLoading} />
            <MyTextEditor isLoading={isLoading} />
            <Medications isLoading={isLoading} />
            <Send isLoading={isLoading} />
        </div>
    );
};

export default memo(OfDoctor);
