import { FC, useRef } from 'react';
import style from './style.module.scss';
import LazyImage from '@src/component/LazyImage';
import { SEE_IMAGE } from '@src/const/text';

const ImageOverview: FC<{ src: string }> = ({ src }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    // const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1en3Ts15-plsc2FBLccozeqivDZwmLYsBXw&s';

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <LazyImage src={src} alt="" />
            </div>
            <div>{SEE_IMAGE}</div>
            <div>99</div>
        </div>
    );
};

export default ImageOverview;
