import { FC, memo } from 'react';
import style from './style.module.scss';
import OfPatient from './component/OfPatient';

const Content: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <OfPatient isLoading={isLoading} />
        </div>
    );
};

export default memo(Content);
