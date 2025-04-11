import { useRef } from 'react';
import style from './style.module.scss';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardFill } from 'react-icons/ri';
import { RiSendPlaneFill } from 'react-icons/ri';
import CommentBox from './component/CommentBox';

const Bottom = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.buttonContainer}>
                <div>
                    <input placeholder="Comment" />
                    <div>
                        <RiSendPlaneFill size={25} color="blue" />
                    </div>
                </div>
                <div>
                    <div>
                        <AiFillLike size={25} color="rgb(195, 195, 195)" />
                    </div>
                    <div>99</div>
                </div>
                <div>
                    <div>
                        <AiFillDislike size={25} color="rgb(195, 195, 195)" />
                    </div>
                    <div>99</div>
                </div>
                <div>
                    <div>
                        <FaRegCommentDots size={25} />
                    </div>
                    <div>99</div>
                </div>
                <div>
                    <div>
                        <RiShareForwardFill size={25} />
                    </div>
                    <div>99</div>
                </div>
            </div>
            <div>
                <CommentBox />
            </div>
        </div>
    );
};

export default Bottom;
