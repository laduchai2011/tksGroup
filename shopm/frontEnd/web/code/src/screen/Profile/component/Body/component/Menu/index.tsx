import { useEffect, useRef } from 'react';
import style from './style.module.scss';
import { MdReadMore } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import { ClickEvent } from './handle/event';
import { selections_type, selections_enum, selections_index_type, selections_index_enum } from './type';
import {
    DIARY,
    PATIENT_RECORD,
    BUY_HISTORY,
    FOLLOW,
    INFORMATION,
    PROVIDER,
    DOCTOR_OR_PHARMACIST,
} from '@src/const/text';

const Menu = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    const list = useRef<selections_type[]>([
        selections_enum.DIARY,
        selections_enum.PATIENT_RECORD,
        selections_enum.BUY_HISTORY,
        selections_enum.FOLLOW,
        selections_enum.INFORMATION,
        selections_enum.PROVIDER,
        selections_enum.DOCTOR_OR_PHARMACIST,
    ]);
    const text_list = [DIARY, PATIENT_RECORD, BUY_HISTORY, FOLLOW, INFORMATION, PROVIDER, DOCTOR_OR_PHARMACIST];

    useEffect(() => {
        if (parent_element.current) {
            const selections_container_element = parent_element.current.children[1];
            const selections_element = parent_element.current.children[1].children;
            const selections_element_when_res = parent_element.current.children[0].children[2].children;
            const len = list.current.length;

            const clickEvent = new ClickEvent(
                selections_container_element,
                selections_element,
                selections_element_when_res,
                len,
                style
            );
            clickEvent.init_select(0);
            clickEvent.addEventListener();

            return () => {
                clickEvent.removeEventListener();
            };
        }
    }, [list]);

    const handle_show = () => {
        if (parent_element.current) {
            const listContainer_element_when_res = parent_element.current.children[0].children[2];
            listContainer_element_when_res.classList.toggle(style.list_show_w_res);
        }
    };

    const list_element = list.current.map((data, index) => {
        const init_selected_index: selections_index_type = selections_index_enum.DIARY;
        let selected_index: selections_index_type = init_selected_index;

        switch (index) {
            case selections_index_enum.DIARY: {
                selected_index = selections_index_enum.DIARY;
                break;
            }
            case selections_index_enum.PATIENT_RECORD: {
                selected_index = selections_index_enum.PATIENT_RECORD;
                break;
            }
            case selections_index_enum.BUY_HISTORY: {
                selected_index = selections_index_enum.BUY_HISTORY;
                break;
            }
            case selections_index_enum.FOLLOW: {
                selected_index = selections_index_enum.FOLLOW;
                break;
            }
            case selections_index_enum.INFORMATION: {
                selected_index = selections_index_enum.INFORMATION;
                break;
            }
            case selections_index_enum.PROVIDER: {
                selected_index = selections_index_enum.PROVIDER;
                break;
            }
            case selections_index_enum.DOCTOR_OR_PHARMACIST: {
                selected_index = selections_index_enum.DOCTOR_OR_PHARMACIST;
                break;
            }
            default: {
                console.warn('Invalid parameter !');
                break;
            }
        }

        const _data = text_list[selected_index];

        return (
            <div key={index} title={data} data-index={index}>
                {_data}
            </div>
        );
    });

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.more}>
                <MdReadMore className={style.more1} size={20} />
                <IoMenu className={style.more2} onClick={() => handle_show()} size={25} />
                <div>{list_element}</div>
            </div>
            <div className={style.list}>{list_element}</div>
            <div className={style.setting}>
                <IoSettingsOutline size={25} />
            </div>
        </div>
    );
};

export default Menu;
