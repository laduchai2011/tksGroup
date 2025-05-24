import { FC } from 'react';
import style from './style.module.scss';
import TextEditor from '@src/component/TextEditor';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    [key: string]: unknown;
}

const PageList: FC<MyOptions> = ({ className, ...props }) => {
    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <TextEditor />
        </div>
    );
};

export default PageList;
