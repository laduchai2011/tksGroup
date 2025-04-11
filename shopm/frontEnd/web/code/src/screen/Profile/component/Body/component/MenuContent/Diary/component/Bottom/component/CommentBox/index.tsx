import { useRef } from 'react';
import style from './style.module.scss';
import { GoX } from 'react-icons/go';
import { FaFileImage } from 'react-icons/fa';
// import avatarnull from '../../../../../../../../../../../asset/avatar/avatarnull.png';
// import { CgMoreAlt } from 'react-icons/cg';
import Comment_List from './component/Comment_List';

const CommentBox = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);

    const handleInput = () => {
        if (textarea_element.current) {
            textarea_element.current.style.height = 'auto';
            textarea_element.current.style.height = textarea_element.current.scrollHeight + 'px';
        }
    };

    const cmt =
        ' Giải thích từ ngữ Trong Luật này, các từ ngữ dưới đây được hiểu như sau: 1. Dược là thuốc và nguyên liệu làm thuốc. 2. Thuốc là chế phẩm có chứa dược chất hoặc dược liệu dùng cho người nhằm mục đích phòng bệnh, chẩn đoán bệnh, chữa bệnh, điều trị bệnh, giảm nhẹ bệnh, điều chỉnh chức năng sinh lý cơ thể người bao gồm thuốc hóa dược, thuốc dược liệu, thuốc cổ truyền, vắc xin và sinh phẩm.';

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.headerContainer}>
                <div>
                    <div>
                        <strong>Comment</strong> 60
                    </div>
                </div>
                <div>Binh luan bai viet</div>
                <div>
                    <div>Post</div>
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
            {/* <div className={style.commentContainer}>
                <div>
                    <div>
                        <img src={avatarnull} alt="avatar" />
                    </div>
                    <div>
                        <div>{cmt}</div>
                        <div>footer</div>
                    </div>
                    <div>
                        <CgMoreAlt />
                    </div>
                </div>
            </div> */}
            <div className={style.commentContainer}>
                <Comment_List />
            </div>
        </div>
    );
};

export default CommentBox;
