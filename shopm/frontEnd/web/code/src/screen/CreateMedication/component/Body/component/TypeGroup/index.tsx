import { memo, useState } from 'react';
import style from './style.module.scss';
import { FRAGILE, NORMAL, OTHER } from '@src/const/text';

const TypeGroup = () => {
    const [typeGroup, setTypeGroup] = useState<number | undefined>(undefined);

    return (
        <div className={style.parent}>
            <div>
                <div className={typeGroup === 0 ? style.active : ''} onClick={() => setTypeGroup(0)}>
                    {NORMAL}
                </div>
                <div className={typeGroup === 1 ? style.active : ''} onClick={() => setTypeGroup(1)}>
                    {FRAGILE}
                </div>
                <div className={typeGroup === 2 ? style.active : ''} onClick={() => setTypeGroup(2)}>
                    {OTHER}
                </div>
            </div>
            <div>{typeGroup === 2 && <input placeholder={OTHER} />}</div>
        </div>
    );
};

export default memo(TypeGroup);
