import { useRef } from 'react';
import style from './style.module.scss';
import avatarnull from '../../../../../../../../../../asset/avatar/avatarnull.png';
import { CgMoreAlt } from 'react-icons/cg';
import { REPORT } from '@src/const/text';

const Top = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const handle_show_more_dialog = () => {
        if (parent_element.current) {
            const more_dialog_element = parent_element.current.children[1].children[1];
            more_dialog_element.classList.toggle(style.show_more_dialog);
        }
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div>
                    <img src={avatarnull} alt="avatar" />
                </div>
                <div>
                    <div>Name Name Name Name</div>
                    <div>time</div>
                </div>
            </div>
            <div>
                <CgMoreAlt onClick={() => handle_show_more_dialog()} size={30} />
                <div>
                    <div>{REPORT}</div>
                </div>
            </div>
        </div>
    );
};

export default Top;
