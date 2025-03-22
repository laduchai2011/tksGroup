import { useState } from 'react';
import style from './style.module.scss';
import { DynamicBigRowArrow } from 'react-tks/components';

const Left = () => {
    const [show, set_show] = useState<boolean>(false);

    const handleShow = () => {
        set_show(!show);
    };

    return (
        <div className={style.left}>
            <DynamicBigRowArrow
                onClick={() => handleShow()}
                dynamicBigRowArrowProps={{
                    during_time_animation: 300,
                    direct: show ? 'left' : 'right',
                }}
            />
        </div>
    );
};

export default Left;
