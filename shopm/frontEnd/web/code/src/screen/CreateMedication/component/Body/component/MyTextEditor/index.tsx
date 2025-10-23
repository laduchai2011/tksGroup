import { FC, memo } from 'react';
import style from './style.module.scss';
import TextEditor from '@src/component/TextEditor';

const MyTextEditor: FC<{ onChange?: (value: string) => void }> = ({ onChange }) => {
    return (
        <div className={style.parent}>
            <TextEditor onChange={onChange} />
        </div>
    );
};

export default memo(MyTextEditor);
