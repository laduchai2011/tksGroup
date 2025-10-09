import { memo } from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import MyImage from './component/MyImage';
import Title from './component/Title';
import Infor from './component/Infor';
import Price from './component/Price';
import Rate from './component/Rate';
import { route_enum } from '@src/router/type';

const Box = () => {
    const navigate = useNavigate();
    const isLoading = false;

    const goToMedication = () => {
        navigate(route_enum.MEDICATION);
    };

    return (
        <div className={style.parent} onClick={() => goToMedication()}>
            <MyImage isLoading={isLoading} />
            <Title isLoading={isLoading} />
            <Infor isLoading={isLoading} />
            <Price isLoading={isLoading} />
            <Rate isLoading={isLoading} />
        </div>
    );
};

export default memo(Box);
