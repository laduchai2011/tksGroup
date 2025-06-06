import { FC, memo } from 'react';
import style from './style.module.scss';
import TextEditor from '@src/component/TextEditor';
import { Page_Options } from './type';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option?: Page_Options;
    [key: string]: unknown;
}

const Page: FC<MyOptions> = ({ option, className, ...props }) => {
    const index = option?.index;
    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <div>
                <p>{index}</p>
            </div>
            <div>
                <TextEditor />
                <div>{option?.data}</div>
            </div>
        </div>
    );
};

export default memo(Page);
