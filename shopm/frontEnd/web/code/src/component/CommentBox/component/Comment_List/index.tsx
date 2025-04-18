import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import A_Comment1 from './component/A_Comment1';
import { Context } from './context';
import { context_type } from './type';

const Comment_List = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const [rect_bottom, set_rect_bottom] = useState<number>(0);

    useEffect(() => {
        if (parent_element.current) {
            const rect = parent_element.current.getBoundingClientRect();
            set_rect_bottom(rect.bottom);
            // console.log('Top:', index, rect.top);
            // console.log('Left:', index, rect.left);
            // console.log('Bottom:', index, rect.bottom);
            // console.log('Right:', index, rect.right);
            // console.log('Width:', index, rect.width);
            // console.log('Height:', index, rect.height);
        }
    }, []);

    const context_value: context_type = {
        parent_element: parent_element,
        rect_bottom_container: rect_bottom,
    };

    return (
        <Context.Provider value={context_value}>
            <div className={style.parent} ref={parent_element}>
                <A_Comment1 index={0} />
                <A_Comment1 index={1} />
                <A_Comment1 index={2} />
                {/* <A_Comment index={3} />
                <A_Comment index={4} />
                <A_Comment index={5} />
                <A_Comment index={6} />
                <A_Comment index={7} /> */}
            </div>
        </Context.Provider>
    );
};

export default Comment_List;
