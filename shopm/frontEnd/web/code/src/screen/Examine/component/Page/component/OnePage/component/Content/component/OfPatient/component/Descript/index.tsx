import { FC, memo, useRef, useState } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';

const Descript: FC<{ isLoading: boolean; isEdit: boolean }> = ({ isLoading, isEdit }) => {
    const descriptInput_element = useRef<HTMLTextAreaElement | null>(null);
    const descriptView_element = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState<number>(1);
    const [descript, setDescript] = useState<string>('');

    const handleDescript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const el = e.target;
        const value = e.target.value;
        const lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10) || 20;
        const currentRows = Math.floor(el.scrollHeight / lineHeight);
        setRows(currentRows + 1);
        setDescript(value);
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.loading} />
            ) : (
                <div className={style.descript}>
                    {isEdit && (
                        <textarea
                            rows={rows}
                            className={style.descriptInput}
                            ref={descriptInput_element}
                            value={descript}
                            onChange={(e) => handleDescript(e)}
                            placeholder="Viết tại đây"
                        />
                    )}
                    {!isEdit && (
                        <div className={style.descriptView} ref={descriptView_element}>
                            {descript}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default memo(Descript);
