import { memo } from 'react';
import style from './style.module.scss';
import MyImage from './component/MyImage';
import Title from './component/Title';
import Infor from './component/Infor';

const Box = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <MyImage isLoading={isLoading} />
            <Title isLoading={isLoading} />
            <Infor isLoading={isLoading} />
        </div>
    );
};

export default memo(Box);
