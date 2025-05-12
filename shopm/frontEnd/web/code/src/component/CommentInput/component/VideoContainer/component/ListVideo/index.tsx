import { FC, useRef, useEffect, memo, useContext } from 'react';
import style from './style.module.scss';
import LazyVideoWithFile from '@src/component/LazyVideoWithFile';
import { Option_props } from './type';
import { Context as Context_CommentInput } from '@src/component/CommentInput/context';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option?: Option_props;
    [key: string]: unknown;
}

const ListVideo: FC<MyOptions> = ({ option, className, ...props }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const context_value_Context_CommentInput = useContext(Context_CommentInput);

    if (!context_value_Context_CommentInput) {
        throw new Error('context_value_Context_CommentInput is undefined');
    }

    const { videos, videoContainer } = context_value_Context_CommentInput;
    const index = videoContainer.index;

    useEffect(() => {
        if (parent_element.current) {
            const { clientWidth } = parent_element.current;
            parent_element.current.scrollTo({
                left: index * clientWidth,
                behavior: 'smooth',
            });
        }
    }, [index]);

    const list_image = videos.map((data, index) => {
        return <LazyVideoWithFile className={style.lazyVideo} key={index} src={data} root={option?.root} />;
    });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            {list_image}
        </div>
    );
};

export default memo(ListVideo);
