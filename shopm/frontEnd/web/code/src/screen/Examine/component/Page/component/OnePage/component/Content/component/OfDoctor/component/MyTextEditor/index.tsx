import { FC, memo } from 'react';
import style from './style.module.scss';
import TextEditor from '@src/component/TextEditor';

const MyTextEditor: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <TextEditor />
        </div>
    );
};

export default memo(MyTextEditor);
