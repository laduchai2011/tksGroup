import { useEffect, useRef, useContext } from 'react';
import style from './style.module.scss';
import { Context as Context_Header_Top_Right } from '@src/screen/Header/component/Top/component/Right/context';
import { selections_index_enum, selections_index_type } from '../../type';
import { NOTIFY, MESSAGE, PROFILE } from '@src/const/text';
import { ClickEvent, set_pos_selected } from './handle/event';

const Header = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const context_value_Context_Header_Top_Right = useContext(Context_Header_Top_Right);

    if (!context_value_Context_Header_Top_Right) {
        throw new Error('context_value_Context_Hader_Top_Right is undefined');
    }

    const { selected, set_selected } = context_value_Context_Header_Top_Right;

    useEffect(() => {
        const _parent_element = parent_element.current;
        if (_parent_element) {
            const clickEvent = new ClickEvent(_parent_element, set_selected);
            clickEvent.addEventListener();

            return () => {
                clickEvent.removeEventListener();
            };
        }
    }, [set_selected]);

    const pos_selected = useRef<selections_index_type>(selections_index_enum.NOTIFY);
    useEffect(() => {
        const _parent_element = parent_element.current;
        if (_parent_element) {
            set_pos_selected(_parent_element, selected, pos_selected);
        }
    }, [selected]);

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div>
                    <div>
                        <div>{NOTIFY}</div>
                    </div>
                    <div />
                </div>
                <div>
                    <div>
                        <div>{MESSAGE}</div>
                    </div>
                    <div />
                </div>
                <div>
                    <div>
                        <div>{PROFILE}</div>
                    </div>
                    <div />
                </div>
            </div>
            <div>
                <div />
            </div>
        </div>
    );
};

export default Header;
