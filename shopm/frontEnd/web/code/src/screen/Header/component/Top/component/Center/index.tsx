import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { RiHome9Fill } from 'react-icons/ri';
import { FaShoppingCart, FaPhone } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { MAIN_BLUE_COLOR } from '@src/utility/color';
import DynamicMenu from '@src/component/DynamicMenu';

const Center = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const [icon_index, set_icon_index] = useState<number>(0);

    useEffect(() => {
        if (parent_element.current) {
            parent_element.current.style.setProperty('--icon-color', MAIN_BLUE_COLOR);
            const icon_containers = parent_element.current.children;
            const icon_containers_len: number = icon_containers.length;
            for (let i: number = 0; i < icon_containers_len; i++) {
                const icon_container = icon_containers[i] as HTMLDivElement;
                icon_container.onclick = function () {
                    set_icon_index(i);
                };
            }
        }
    }, []);

    const handle_icon_index = (_icon_index: number): string => {
        if (_icon_index === icon_index) {
            return style.active;
        }
        return '';
    };

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <DynamicMenu />
            </div>
            <div>
                <div className={handle_icon_index(0)}>
                    <RiHome9Fill size={40} />
                </div>
                <div className={handle_icon_index(1)}>
                    <FaShoppingCart size={40} />
                </div>
                <div className={handle_icon_index(2)}>
                    <FaUserDoctor size={40} />
                </div>
                <div className={handle_icon_index(3)}>
                    <FaPhone size={40} />
                </div>
                <div className={handle_icon_index(4)}>
                    <FcAbout size={40} />
                </div>
            </div>
        </div>
    );
};

export default Center;
