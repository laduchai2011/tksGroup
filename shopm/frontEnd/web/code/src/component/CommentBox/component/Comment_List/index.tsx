import { useRef } from 'react';
import style from './style.module.scss';
import A_Comment from './component/A_Comment';

const Comment_List = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    return (
        <div className={style.parent} ref={parent_element}>
            <A_Comment />
        </div>
    );
};

export default Comment_List;
