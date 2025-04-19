import { FC, useRef, useEffect } from 'react';
import style from './style.module.scss';
import Top from './component/Top';
import Center from './component/Center';
import Bottom from './component/Bottom';
import A_Comment2 from './component/A_Comment2';

const A_Comment1: FC<{ index: number }> = ({ index }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    useEffect(() => {}, [index]);

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <Top />
            </div>
            <div>
                <Center />
            </div>
            <div>
                <A_Comment2 index={0} />
            </div>
            <div>
                <Bottom index={index} />
            </div>
        </div>
    );
};

export default A_Comment1;
