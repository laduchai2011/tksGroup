import { useRef } from 'react';
import style from './style.module.scss';
import Top from './component/Top';
import Center from './component/Center';
import Bottom from './component/Bottom';

const Diary = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <Top />
            </div>
            <div>
                <Center />
            </div>
            <div>
                <Bottom />
            </div>
        </div>
    );
};

export default Diary;
