import { FC, useRef, memo, useContext } from 'react';
import style from './style.module.scss';
import { Option_props } from './type';
import { Context as Context_CommentInput } from '@src/component/CommentInput/context';
import MyImage from './component/MyImage';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option?: Option_props;
    [key: string]: unknown;
}

const ListImage: FC<MyOptions> = ({ option, className, ...props }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const root = option?.root;

    const context_value_Context_CommentInput = useContext(Context_CommentInput);

    if (!context_value_Context_CommentInput) {
        throw new Error('context_value_Context_CommentInput is undefined');
    }

    const { images } = context_value_Context_CommentInput;

    const list_image = images.map((data, index) => {
        return <MyImage className={style.lazyImage} key={index} option={{ my_src: data }} root={root} />;
    });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            {list_image}
        </div>
    );
};

export default memo(ListImage);
