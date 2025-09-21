import { FC, memo } from 'react';
import style from './style.module.scss';
import OneInformation from './component/OneInformation';
import { infor_enum } from './component/type';

const Information: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <OneInformation field={infor_enum.MAJOR} data={infor_enum.MAJOR} isLoading={isLoading} />
            <OneInformation field={infor_enum.EXPERIENCE} data={infor_enum.EXPERIENCE} isLoading={isLoading} />
            <OneInformation field={infor_enum.NOTE} data={infor_enum.NOTE} isLoading={isLoading} />
        </div>
    );
};

export default memo(Information);
