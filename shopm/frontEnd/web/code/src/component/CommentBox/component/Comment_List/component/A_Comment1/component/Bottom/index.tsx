import { FC, useRef, useContext, useEffect } from 'react';
import style from './style.module.scss';
import { COMMENT } from '@src/const/text';
import { Context as Context_CommentBox_Comment_List } from '@src/component/CommentBox/component/Comment_List/context';
import throttle from '@src/handle/throttle';

const Bottom: FC<{ index: number }> = ({ index }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const context_value_Context_CommentBox_Comment_List = useContext(Context_CommentBox_Comment_List);

    if (!context_value_Context_CommentBox_Comment_List) {
        throw new Error('context_value_Context_CommentBox_Comment_List is undefined');
    }

    const { parent_element: parent_element_Comment_List } = context_value_Context_CommentBox_Comment_List;

    useEffect(() => {
        const handleScroll = throttle(() => {
            // if (parent_element.current) {
            //     const rect = parent_element.current.getBoundingClientRect();
            //     const rect_bottom = rect.bottom;
            // }
        }, 500);

        const el_parent_element_Comment_List = parent_element_Comment_List.current;

        if (el_parent_element_Comment_List) {
            el_parent_element_Comment_List.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (el_parent_element_Comment_List) {
                el_parent_element_Comment_List.removeEventListener('scroll', handleScroll);
            }
        };
    }, [parent_element_Comment_List, index]);

    const handle_show_comment2 = () => {};

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div />
            </div>
            <div>
                <div />
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,6 L24,12 Z M12,18 L24,12 Z" />
                </svg>
                <div onClick={() => handle_show_comment2()}>{`3 ${COMMENT} ${index}`}</div>
            </div>
        </div>
    );
};

export default Bottom;
