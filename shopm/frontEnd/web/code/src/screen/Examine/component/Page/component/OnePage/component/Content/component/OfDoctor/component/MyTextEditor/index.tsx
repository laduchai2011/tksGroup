import { FC, memo } from 'react';
import style from './style.module.scss';
import TextEditor from '@src/component/TextEditor';
import Skeleton from '@src/component/Skeleton';

const MyTextEditor: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return isLoading ? (
        <Skeleton className={style.parent} />
    ) : (
        <div className={style.parent}>
            <TextEditor onChange={(value) => console.log(value)} />
        </div>
    );
};

export default memo(MyTextEditor);
