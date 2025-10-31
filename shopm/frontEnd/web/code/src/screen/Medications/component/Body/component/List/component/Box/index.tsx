import { memo, FC } from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import MyImage from './component/MyImage';
import Title from './component/Title';
import Infor from './component/Infor';
import Price from './component/Price';
import Rate from './component/Rate';
import { route_enum } from '@src/router/type';
import { MedicationField } from '@src/dataStruct/medication';

const Box: FC<{ data: MedicationField }> = ({ data }) => {
    const navigate = useNavigate();
    const isLoading = false;

    const goToMedication = () => {
        navigate(route_enum.MEDICATION);
    };

    return (
        <div className={style.parent} onClick={() => goToMedication()}>
            <MyImage isLoading={isLoading} data={data} />
            <Title isLoading={isLoading} data={data} />
            <Infor isLoading={isLoading} data={data} />
            <Price isLoading={isLoading} data={data} />
            <Rate isLoading={isLoading} data={data} />
        </div>
    );
};

export default memo(Box);
