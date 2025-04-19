import { useRef } from 'react';
import style from './style.module.scss';
import A_Comment1 from './component/A_Comment1';
import { Context } from './context';
import { context_type } from './type';

const Comment_List = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const context_value: context_type = {
        parent_element: parent_element,
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
