import { memo, useEffect, useRef, useContext, useCallback } from 'react';
import style from './style.module.scss';
import { GoX } from 'react-icons/go';
import { DETAIL_YOUR_COMMENT } from '@src/const/text';
import ListImage from './component/ListImage';
import ListVideo from './component/ListVideo';
import { Context as Context_CommentInput } from '@src/component/CommentInput/context';

const Detail = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const context_value_Context_CommentInput = useContext(Context_CommentInput);

    if (!context_value_Context_CommentInput) {
        throw new Error('context_value_Context_CommentInput is undefined');
    }

    const { comment, detail, setDetail } = context_value_Context_CommentInput;
    const isShow = detail.isShow;

    useEffect(() => {
        if (isShow) {
            const timeout_display = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show_display);
                }
                clearTimeout(timeout_display);
            }, 0);
            const timeout_opacity = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show_opacity);
                }
                clearTimeout(timeout_opacity);
            }, 300);
        } else {
            const timeout_opacity = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.remove(style.parent_show_opacity);
                }
                clearTimeout(timeout_opacity);
            }, 20);
            const timeout_display = setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.remove(style.parent_show_display);
                }
                clearTimeout(timeout_display);
            }, 320);
            const timeout_closeComponent = setTimeout(() => {
                setDetail((pre) => {
                    return {
                        ...pre,
                        isShowComponent: false,
                    };
                });
                clearTimeout(timeout_closeComponent);
            }, 350);
        }
    }, [isShow, setDetail]);

    const handleClose = useCallback(() => {
        setDetail((pre) => {
            return {
                ...pre,
                isShow: false,
            };
        });
    }, [setDetail]);

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.header}>
                <div>{DETAIL_YOUR_COMMENT}</div>
                <GoX onClick={() => handleClose()} size={25} />
            </div>
            <div className={style.body}>
                <div className={style.text}>{comment}</div>
                <div className={style.imageContainer}>
                    <ListImage />
                </div>
                <div className={style.videoContainer}>
                    <ListVideo />
                </div>
            </div>
        </div>
    );
};

export default memo(Detail);
