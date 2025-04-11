import { useRef } from 'react';
import style from './style.module.scss';
import Top from './component/Top';
import Center from './component/Center';

const A_Comment = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <Top />
            </div>
            <div>
                <Center />
            </div>
            <div></div>
        </div>
    );
};

export default A_Comment;
