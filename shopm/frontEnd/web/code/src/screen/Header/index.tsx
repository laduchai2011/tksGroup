import React from 'react';
import Top from './Top';
import styles from './styles.module.scss';
import { Header__interface } from './interface';

interface Header__Props extends React.HTMLProps<HTMLDivElement> {
    header__interface?: Header__interface;
    [key: string]: unknown;
}

const Header: React.FC<Header__Props> = ({ header__interface, className, ...props }) => {
    const top_isShow: boolean | undefined = header__interface?.top_isShow;

    return (
        <div className={`${styles.header} ${className || ''}`} {...props}>
            {top_isShow && <Top />}
        </div>
    );
};

export default Header;
