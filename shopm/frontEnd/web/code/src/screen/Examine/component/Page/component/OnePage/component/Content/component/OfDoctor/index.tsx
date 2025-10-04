import { FC, memo } from 'react';
import style from './style.module.scss';
import TextTop from './component/TextTop';
import MyTextEditor from './component/MyTextEditor';

const OfDoctor: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <TextTop isLoading={isLoading} />
            <MyTextEditor isLoading={isLoading} />
        </div>
    );
};

export default memo(OfDoctor);
