import { useState, useRef, useEffect, useContext } from 'react';
import style from './style.module.scss';
import DynamicBigRowArrow from '@src/component/Icon/DynamicBigRowArrow';
import { useNavigate } from 'react-router-dom';
import { select_enum, selected_type, route_enum, routed_type } from '@src/router/type';
import { HeaderContext } from '@src/screen/Header/context';

const Left = () => {
    const navigate = useNavigate();

    const headerContext = useContext(HeaderContext);
    if (!headerContext) {
        throw new Error('HeaderContext in (Left) Header Sreen component cant undefined !');
    }
    const { selected } = headerContext;

    const [show, set_show] = useState<boolean>(false);
    const parent_element = useRef<HTMLDivElement | null>(null);
    const icon_element = useRef<SVGSVGElement | null>(null);
    const headers = useRef<selected_type[]>([
        select_enum.HOME,
        select_enum.MEDICATIONS,
        select_enum.MEDICATION,
        select_enum.CREATE_MEDICATION,
        select_enum.DOCTORS,
        select_enum.CONTACT,
        select_enum.REPORT,
        select_enum.PROFILE,
        select_enum.EXAMINE,
        select_enum.SIGNUP,
        select_enum.PATIENT_RECORD,
        select_enum.SIGNOUT,
    ]);
    const routes = useRef<routed_type[]>([
        route_enum.HOME,
        route_enum.MEDICATIONS,
        route_enum.MEDICATION,
        route_enum.CREATE_MEDICATION,
        route_enum.DOCTORS,
        route_enum.CONTACT,
        route_enum.REPORT,
        route_enum.PROFILE,
        route_enum.EXAMINE,
        route_enum.SIGNUP,
        route_enum.PATIENT_RECORD,
        route_enum.SIGNOUT,
    ]);

    const handleShow = () => {
        set_show(!show);
    };

    useEffect(() => {
        if (show) {
            if (parent_element.current) {
                parent_element.current.classList.add(style.parent_show);
                const timeout = setTimeout(() => {
                    if (icon_element.current) {
                        icon_element.current.classList.remove(style.icon_show);
                    }
                    clearTimeout(timeout);
                }, 300);
            }
        } else {
            if (parent_element.current) {
                parent_element.current.classList.remove(style.parent_show);
                const timeout = setTimeout(() => {
                    if (icon_element.current) {
                        icon_element.current.classList.add(style.icon_show);
                    }
                    clearTimeout(timeout);
                }, 300);
            }
        }
    }, [show]);

    const handleShowClass = (show: boolean): string => {
        if (show) {
            return style.show;
        }
        return '';
    };

    const handleSelectedOption = (_selected: selected_type): string => {
        if (selected === _selected) {
            return style.option_selected;
        }
        return '';
    };

    const list_header = headers.current.map((data, index) => {
        return (
            <div
                className={`${style.option} ${handleSelectedOption(data)}`}
                key={index}
                title={data}
                onClick={() => navigate(routes.current[index])}
            >
                {data}
            </div>
        );
    });

    return (
        <div className={`${style.parent} ${handleShowClass(show)}`} ref={parent_element}>
            <div className={style.top}>
                <div className={style.logo}>
                    <strong onClick={() => navigate(route_enum.HOME)}>SHOPM</strong>
                </div>
                <DynamicBigRowArrow
                    className={style.icon}
                    ref={icon_element}
                    onClick={() => handleShow()}
                    dynamicBigRowArrowProps={{
                        during_time_animation: 300,
                        direct: show ? 'left' : 'right',
                    }}
                />
            </div>
            <div className={style.body}>{list_header}</div>
        </div>
    );
};

export default Left;
