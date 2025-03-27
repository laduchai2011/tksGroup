import { useState, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { IoNotifications } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import { BsXLg } from 'react-icons/bs';
import avatarnull from '../../../../../../asset/avatar/avatarnull.png';
import Header from './component/Header';
import Body from './component/Body';
import { selections_type, selections_enum } from './type';
import { Context } from './context';
import { context_type } from './type';
import { Loading } from 'react-tks/components';

const Right = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const [selected, set_selected] = useState<selections_type>(selections_enum.NOTIFY);
    const [isShow, set_isShow] = useState<boolean>(false);

    useEffect(() => {
        if (parent_element.current) {
            const show_box = parent_element.current.children[1];

            if (isShow) {
                (show_box as HTMLDivElement).style.display = 'block';
            } else {
                (show_box as HTMLDivElement).style.display = 'none';
            }
        }
    }, [isShow]);

    const handle_del_show = () => {
        set_isShow(false);
    };

    const handle_selections = (type: selections_type) => {
        set_isShow(true);

        switch (type) {
            case selections_enum.NOTIFY: {
                set_selected(selections_enum.NOTIFY);
                break;
            }
            case selections_enum.MESSAGE: {
                set_selected(selections_enum.MESSAGE);
                break;
            }
            case selections_enum.PROFILE: {
                set_selected(selections_enum.PROFILE);
                break;
            }
            default: {
                console.warn('Invalid Parameter !');
                break;
            }
        }
    };

    const context_value: context_type = {
        selected: selected,
        set_selected: set_selected,
        isShow: isShow,
        set_isShow: set_isShow,
    };

    const lineCircleLoad = {
        lineSize: 10,
        lineBackgroundColor: 'brown',
        circleSize: 150,
    };

    const load = {
        type: 'LINE_CIRCLE',
        infor: lineCircleLoad,
    };

    return (
        <Context.Provider value={context_value}>
            <div className={style.parent} ref={parent_element}>
                <div>
                    <div className={style.iconContainer} onClick={() => handle_selections(selections_enum.NOTIFY)}>
                        <IoNotifications size={30} color="greenyellow" />
                        <div>99</div>
                    </div>
                    <div className={style.iconContainer} onClick={() => handle_selections(selections_enum.MESSAGE)}>
                        <FaRegMessage size={30} />
                        <div>99</div>
                    </div>
                    <div className={style.avatarContainer} onClick={() => handle_selections(selections_enum.PROFILE)}>
                        <img src={avatarnull} alt="avatar" />
                        <div>Name</div>
                    </div>
                </div>
                <div>
                    <div>
                        <BsXLg size={25} onClick={() => handle_del_show()} />
                    </div>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Body />
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
};

export default Right;
