import { useRef, useEffect } from 'react';
import style from './style.module.scss';
import { GoX } from 'react-icons/go';
import { FaFileImage } from 'react-icons/fa';
import Comment_List from './component/Comment_List';
import { COMMENT, POST, COMMENT_POST } from '@src/const/text';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@src/redux';
import { state_props } from './type';
import { set_isShow } from '@src/redux/slice/CommentBox';

const CommentBox = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);

    const state_store: state_props = useSelector((state: RootState) => state.CommentBoxSlice);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (state_store.isShow) {
            if (parent_element.current) {
                parent_element.current.classList.add(style.parent_show_display);
            }
            setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show_opacity);
                }
            }, 50);
        } else {
            if (parent_element.current) {
                parent_element.current.classList.remove(style.parent_show_opacity);
            }
            setTimeout(() => {
                if (parent_element.current) {
                    parent_element.current.classList.remove(style.parent_show_display);
                }
            }, 350);
        }
    }, [state_store.isShow]);

    const handleInput = () => {
        if (textarea_element.current) {
            textarea_element.current.style.height = 'auto';
            textarea_element.current.style.height = textarea_element.current.scrollHeight + 'px';
        }
    };

    const handleClose = () => {
        dispatch(set_isShow(false));
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.headerContainer}>
                <div>
                    <div>
                        <strong>{COMMENT}</strong> 60
                    </div>
                </div>
                <div>{`${COMMENT_POST}`}</div>
                <div>
                    <div>{POST}</div>
                    <GoX onClick={() => handleClose()} size={25} />
                </div>
            </div>
            <div className={style.inputContainer}>
                <textarea ref={textarea_element} onInput={handleInput} rows={2} placeholder="Comment" />
            </div>
            <div className={style.btnContainer}>
                <div>
                    <FaFileImage size={20} color="greenyellow" />
                </div>
                <div>
                    <button>Cancle</button>
                    <button>Comment</button>
                </div>
            </div>
            <div className={style.commentContainer}>
                <Comment_List />
            </div>
        </div>
    );
};

export default CommentBox;
