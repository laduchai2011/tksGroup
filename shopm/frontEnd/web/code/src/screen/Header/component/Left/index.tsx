import { useState, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { DynamicBigRowArrow } from 'react-tks/components';
import { useNavigate } from 'react-router-dom';
import { HOME, PROFILE, PATIENT_RECORD } from '@src/const/text';

const Left = () => {
    const navigate = useNavigate();

    const [show, set_show] = useState<boolean>(false);
    const parent_element = useRef<HTMLDivElement | null>(null);
    const icon_element = useRef<SVGSVGElement | null>(null);

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

    return (
        <div className={`${style.parent} ${handleShowClass(show)}`} ref={parent_element}>
            <div className={style.top}>
                <div className={style.logo}>
                    <strong onClick={() => navigate('/')}>SHOPM</strong>
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
            <div className={style.body}>
                <div title={HOME} onClick={() => navigate('/')}>
                    {HOME}
                </div>
                <div title={PROFILE} onClick={() => navigate('/profile')}>
                    {PROFILE}
                </div>
                <div title={PATIENT_RECORD} onClick={() => navigate('/patient_record')}>
                    {PATIENT_RECORD}
                </div>
            </div>
        </div>
    );
};

export default Left;
