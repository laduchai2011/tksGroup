import { useEffect, useRef, useState, useContext } from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { RiHome9Fill } from 'react-icons/ri';
import { FaShoppingCart, FaPhone } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { MAIN_BLUE_COLOR } from '@src/utility/color';
import DynamicMenu from '@src/component/DynamicMenu';
import { HeaderContext } from '@src/screen/Header/context';
import { select_enum, route_enum, selected_type, routed_type } from '@src/screen/Header/type';

const Center = () => {
    const navigate = useNavigate();
    const parent_element = useRef<HTMLDivElement | null>(null);
    // const [icon_index, set_icon_index] = useState<number>(0);
    const [menu_container_active, set_menu_container_active] = useState<boolean>(false);

    const headerContext = useContext(HeaderContext);
    if (!headerContext) {
        throw new Error('HeaderContext in Header Sreen component cant undefined !');
    }
    const { selected } = headerContext;

    const headerArray = useRef<selected_type[]>([
        select_enum.HOME,
        select_enum.MEDICATIONS,
        select_enum.DOCTORS,
        select_enum.CONTACT,
        select_enum.REPORT,
    ]);

    const routeArray = useRef<routed_type[]>([
        route_enum.HOME,
        route_enum.MEDICATIONS,
        route_enum.DOCTORS,
        route_enum.CONTACT,
        route_enum.REPORT,
    ]);

    useEffect(() => {
        if (parent_element.current) {
            parent_element.current.style.setProperty('--icon-color', MAIN_BLUE_COLOR);
            const icon_containers = parent_element.current.children[1].children;
            const icon_containers_len: number = icon_containers.length;
            for (let i: number = 0; i < icon_containers_len; i++) {
                const icon_container = icon_containers[i] as HTMLDivElement;
                icon_container.onclick = function () {
                    // set_icon_index(i);
                    const selectedIndex = selected
                        ? headerArray.current.indexOf(selected)
                        : headerArray.current.indexOf(select_enum.HOME);
                    if (i !== selectedIndex) {
                        navigate(routeArray.current[i]);
                    }
                };
            }
        }
    }, []);

    useEffect(() => {
        if (parent_element.current) {
            const menu_contaiber_element = parent_element.current.children[1];
            if (menu_container_active) {
                menu_contaiber_element.classList.add(style.menu_active);
            } else {
                menu_contaiber_element.classList.remove(style.menu_active);
            }
        }
    }, [menu_container_active]);

    const handle_icon_index = (_selected: selected_type): string => {
        if (_selected === selected) {
            return style.active;
        }
        return '';
    };

    const handle_show_menu = () => {
        set_menu_container_active(!menu_container_active);
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <DynamicMenu dynamicMenu={{ active: menu_container_active }} onClick={() => handle_show_menu()} />
            </div>
            <div>
                <div className={handle_icon_index(select_enum.HOME)}>
                    <RiHome9Fill size={40} />
                </div>
                <div className={handle_icon_index(select_enum.MEDICATIONS)}>
                    <FaShoppingCart size={40} />
                </div>
                <div className={handle_icon_index(select_enum.DOCTORS)}>
                    <FaUserDoctor size={40} />
                </div>
                <div className={handle_icon_index(select_enum.CONTACT)}>
                    <FaPhone size={40} />
                </div>
                <div className={handle_icon_index(select_enum.REPORT)}>
                    <FcAbout size={40} />
                </div>
            </div>
        </div>
    );
};

export default Center;
