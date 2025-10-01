import { FC, memo, useState } from 'react';
import style from './style.module.scss';
import TextTop from './component/TextTop';
import Edit from './component/Edit';
import Descript from './component/Descript';
import ImgContainer from './component/ImgContainer';
import Send from './component/Send';

const OfPatient: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    return (
        <div className={style.parent}>
            <TextTop isLoading={isLoading} />
            <Edit isLoading={isLoading} setIsEdit={setIsEdit} />
            <Descript isLoading={isLoading} isEdit={isEdit} />
            <ImgContainer isLoading={isLoading} />
            <Send isLoading={isLoading} />
        </div>
    );
};

export default memo(OfPatient);
