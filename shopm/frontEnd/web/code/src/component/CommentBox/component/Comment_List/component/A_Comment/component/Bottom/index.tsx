import { useRef } from 'react';
import style from './style.module.scss';
import { COMMENT } from '@src/const/text';

const Bottom = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div />
            </div>
            <div>
                <div />
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,6 L24,12 Z M12,18 L24,12 Z" />
                </svg>
                <div>{`3 ${COMMENT}`}</div>
            </div>
        </div>
    );
};

export default Bottom;
