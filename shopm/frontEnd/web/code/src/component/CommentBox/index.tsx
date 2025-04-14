import { useRef } from 'react';
import style from './style.module.scss';
import { GoX } from 'react-icons/go';
import { FaFileImage } from 'react-icons/fa';
import Comment_List from './component/Comment_List';
import { COMMENT, POST, COMMENT_POST } from '@src/const/text';

const CommentBox = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);

    const handleInput = () => {
        if (textarea_element.current) {
            textarea_element.current.style.height = 'auto';
            textarea_element.current.style.height = textarea_element.current.scrollHeight + 'px';
        }
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
                    <GoX size={25} />
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
