import { FC, memo, useState, useEffect } from 'react';
import style from './style.module.scss';
import { FRAGILE, NORMAL, OTHER } from '@src/const/text';
import { typeGroup_enum, typeGroup_type } from '@src/dataStruct/medication';

const TypeGroup: FC<{ onChange?: (typeGroup: typeGroup_type) => void }> = ({ onChange }) => {
    const [typeGroup, setTypeGroup] = useState<typeGroup_type | undefined>(undefined);
    const [otherType, setOtherType] = useState<string>('');

    useEffect(() => {
        if (onChange && typeGroup !== undefined) {
            if (typeGroup === typeGroup_enum.NORMAL || typeGroup === typeGroup_enum.FRAGILE) {
                onChange(typeGroup);
            } else {
                if (otherType.length > 0) {
                    onChange(otherType);
                }
            }
        }
    }, [onChange, typeGroup, otherType]);

    const handleOtherType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setOtherType(value.trim());
    };

    return (
        <div className={style.parent}>
            <div>
                <div
                    className={typeGroup === typeGroup_enum.NORMAL ? style.active : ''}
                    onClick={() => setTypeGroup(typeGroup_enum.NORMAL)}
                >
                    {NORMAL}
                </div>
                <div
                    className={typeGroup === typeGroup_enum.FRAGILE ? style.active : ''}
                    onClick={() => setTypeGroup(typeGroup_enum.FRAGILE)}
                >
                    {FRAGILE}
                </div>
                <div className={typeGroup === '' ? style.active : ''} onClick={() => setTypeGroup('')}>
                    {OTHER}
                </div>
            </div>
            <div>
                {typeGroup === '' && (
                    <input value={otherType} onChange={(e) => handleOtherType(e)} placeholder={OTHER} />
                )}
            </div>
        </div>
    );
};

export default memo(TypeGroup);
