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

    const { parent_element: parent_element_Comment_List, rect_bottom_container } =
        context_value_Context_CommentBox_Comment_List;

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (parent_element.current) {
                const rect = parent_element.current.getBoundingClientRect();
                const rect_bottom = rect.bottom;

                console.log(rect_bottom > rect_bottom_container, index);

                // if (rect_bottom > rect_bottom_container) {
                //     parent_element.current.style.position = 'fixed';
                //     parent_element.current.style.top = `${rect_bottom_container - rect.height - 10}px`;
                //     parent_element.current.style.left = '5px';
                //     parent_element.current.style.zIndex = `${100 - index}`;
                // } else {
                //     parent_element.current.style.position = 'static';
                // }

                // parent_element.current.style.position = 'fixed';
                // parent_element.current.style.top = `${rect_bottom_container}px`;
            }
        }, 500);

        // const handleScroll = () => {
        //     if (parent_element.current && parent_element_Comment_List.current) {
        //         // if (index === 2) {
        //         //     console.log(rect_bottom_container, rect_bottom + 10);
        //         //     console.log(rect_bottom + 10 >= rect_bottom_container);
        //         // }

        //         // if (rect_bottom + 10 >= rect_bottom_container) {
        //         //     parent_element.current.style.position = 'fixed';
        //         //     parent_element.current.style.top = `${rect_bottom_container - 50}px`;
        //         // } else {
        //         //     parent_element.current.style.position = 'static';
        //         // }

        //         const scrollBottom_parent_element_Comment_List =
        //             parent_element_Comment_List.current.scrollTop + parent_element_Comment_List.current.clientHeight;
        //         const scrollBottom_parent_element =
        //             parent_element.current.scrollTop + parent_element.current.clientHeight;

        //         // console.log('isAtBottom', isAtBottom);

        //         const at_parent_element_in_bottom_parent_element_Comment_List =

        //         // if (isAtBottom) {
        //         //     parent_element.current.style.position = 'sticky';
        //         //     parent_element.current.style.bottom = '0';
        //         // } else {
        //         //     parent_element.current.style.position = 'static';
        //         //     parent_element.current.style.bottom = '0';
        //         // }
        //     }
        // };

        const el_parent_element_Comment_List = parent_element_Comment_List.current;

        if (el_parent_element_Comment_List) {
            el_parent_element_Comment_List.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (el_parent_element_Comment_List) {
                el_parent_element_Comment_List.removeEventListener('scroll', handleScroll);
            }
        };
    }, [parent_element_Comment_List, index, rect_bottom_container]);

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
                <div>{`3 ${COMMENT} ${index}`}</div>
            </div>
        </div>
    );
};

export default Bottom;
