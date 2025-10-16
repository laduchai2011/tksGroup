import { memo, FC, useState, useEffect } from 'react';
import style from './style.module.scss';
import { TiDeleteOutline } from 'react-icons/ti';
import { CLOSE } from '@src/const/text';

const MyImage: FC<{ data: File }> = ({ data }) => {
    const [src, setSrc] = useState<string>('');

    useEffect(() => {
        const _src = URL.createObjectURL(data);
        setSrc(_src);

        return () => {
            URL.revokeObjectURL(_src);
        };
    }, [data]);

    return (
        src.length > 0 && (
            <div className={style.parent}>
                <TiDeleteOutline title={CLOSE} />
                <img src={src} alt="" />
            </div>
        )
    );
};

export default memo(MyImage);
