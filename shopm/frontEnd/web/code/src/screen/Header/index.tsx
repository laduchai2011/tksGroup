import React from 'react';
import Top from './component/Top';
import Left from './component/Left';
import style from './style.module.scss';
import { Header__interface } from './interface';

interface Header__Props extends React.HTMLProps<HTMLDivElement> {
    header__interface?: Header__interface;
    [key: string]: unknown;
}

const Header: React.FC<Header__Props> = ({ header__interface, className, ...props }) => {
    const top_isShow: boolean | undefined = header__interface?.top_isShow;
    const left_isShow: boolean | undefined = header__interface?.left_isShow;

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            {top_isShow && <Top />}
            {left_isShow && <Left />}
        </div>
    );
};

export default Header;
