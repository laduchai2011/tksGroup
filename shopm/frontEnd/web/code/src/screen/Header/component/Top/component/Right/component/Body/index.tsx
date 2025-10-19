import { useRef, useEffect, useContext } from 'react';
import style from './style.module.scss';
import Notify from './component/Notify';
import Message from './component/Message';
import Profile from './component/Profile';
import { Context as Context_Hader_Top_Right } from '@src/screen/Header/component/Top/component/Right/context';
import Loading from '@src/component/Loading';
import { selections_index_enum, selections_enum, selections_index_type } from '../../type';

const Body = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const context_value_Context_Hader_Top_Right = useContext(Context_Hader_Top_Right);

    if (!context_value_Context_Hader_Top_Right) {
        throw new Error('context_value_Context_Hader_Top_Right is undefined');
    }

    const { selected, isLoading } = context_value_Context_Hader_Top_Right;

    const pos_selected = useRef<selections_index_type>(selections_index_enum.NOTIFY);
    useEffect(() => {
        const _parent_element = parent_element.current;

        switch (selected) {
            case selections_enum.NOTIFY: {
                pos_selected.current = selections_index_enum.NOTIFY;
                break;
            }
            case selections_enum.MESSAGE: {
                pos_selected.current = selections_index_enum.MESSAGE;
                break;
            }
            case selections_enum.PROFILE: {
                pos_selected.current = selections_index_enum.PROFILE;
                break;
            }
            default: {
                console.warn('Invalid Parameter !');
                break;
            }
        }

        if (_parent_element) {
            _parent_element.style.setProperty('--pos-selected', `${pos_selected.current}`);

            if (!isLoading) {
                const cpn_containers = _parent_element.children[0].children;
                const content_heght = cpn_containers[pos_selected.current].getBoundingClientRect().height;
                _parent_element.style.height = `${content_heght}px`;
            } else {
                _parent_element.style.height = '300px';
            }
        }
    }, [selected, isLoading]);

    const lineCircleLoad = {
        lineSize: 5,
        lineBackgroundColor: 'brown',
        circleSize: 30,
    };

    const load = {
        type: 'LINE_CIRCLE',
        infor: lineCircleLoad,
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.content}>
                <div>{!isLoading && selected === selections_enum.NOTIFY && <Notify />}</div>
                <div>{!isLoading && selected === selections_enum.MESSAGE && <Message />}</div>
                <div>{!isLoading && selected === selections_enum.PROFILE && <Profile />}</div>
            </div>
            {isLoading && (
                <div className={style.loading}>
                    <Loading load={load} />
                </div>
            )}
        </div>
    );
};

export default Body;
