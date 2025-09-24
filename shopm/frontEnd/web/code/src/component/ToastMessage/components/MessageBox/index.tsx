import React, { FC, useRef, useEffect } from 'react';
import style from './style.module.scss';

import TickSymbol from '@src/component/Icon/TickSymbol';
import WarnTriangle from '@src/component/Icon/WarnTriangle';
import ErrorCircle from '@src/component/Icon/ErrorCircle';
import DeleteCircle from '@src/component/Icon/DeleteCircle';

import { TickSymbolProps } from '@src/component/Icon/TickSymbol/type';
import { WarnTriangleProps } from '@src/component/Icon/WarnTriangle/type';
import { ErrorCircleProps } from '@src/component/Icon/ErrorCircle/type';
import { DeleteCircleProps } from '@src/component/Icon/DeleteCircle/type';

import { TOAST_MESSAGE } from '../../const';

const MessageBox: FC<{
    type?: string;
    message?: string;
}> = ({ type, message }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const autoRemoveShow = useRef<boolean>(true);

    let color: string | undefined;
    const successColor = '#6eff33';
    const warnColor = '#ffff00';
    const errorColor = 'red';

    if (type === TOAST_MESSAGE.TYPE.SUCCESS) {
        color = successColor;
    }

    if (type === TOAST_MESSAGE.TYPE.WARN) {
        color = warnColor;
    }

    if (type === TOAST_MESSAGE.TYPE.ERROR) {
        color = errorColor;
    }

    useEffect(() => {
        const top: number = 50;

        if (parent_element.current) {
            parent_element.current.style.setProperty('--show-time', '1');
            const interval_addShow = setInterval(() => {
                if (parent_element.current) {
                    parent_element.current.classList.add(style.parent_show);
                }
                clearInterval(interval_addShow);
            }, 100);

            parent_element.current.style.top = `${top}px`;
            parent_element.current.style.setProperty('--message-color', `${color}`);

            const interval_removeShow = setInterval(() => {
                if (parent_element.current && autoRemoveShow.current) {
                    parent_element.current.classList.remove(style.parent_show);
                }
                clearInterval(interval_removeShow);
            }, 5000);
        }
    }, [color]);

    const handleDelete = (): void => {
        if (parent_element.current) {
            parent_element.current.style.setProperty('--show-time', '1');
            parent_element.current.classList.remove(style.parent_show);
        }
    };

    const handleMouseOver = (): void => {
        autoRemoveShow.current = false;
    };

    const tickSymbol: TickSymbolProps = {
        size: 30,
        fill: color,
    };

    const warnTriangle: WarnTriangleProps = {
        size: 30,
        fill: color,
    };

    const errorCircle: ErrorCircleProps = {
        size: 30,
        fill: color,
    };

    const deleteCircle: DeleteCircleProps = {
        size: 20,
    };

    return (
        <div className={style.parent} ref={parent_element} onMouseOver={() => handleMouseOver()}>
            <div></div>
            <div>
                {type === TOAST_MESSAGE.TYPE.SUCCESS && <TickSymbol tickSymbol={tickSymbol} />}
                {type === TOAST_MESSAGE.TYPE.WARN && <WarnTriangle warnTriangle={warnTriangle} />}
                {type === TOAST_MESSAGE.TYPE.ERROR && <ErrorCircle errorCircle={errorCircle} />}
            </div>
            <div>{message}</div>
            <div>
                <DeleteCircle deleteCircle={deleteCircle} onClick={() => handleDelete()} />
            </div>
        </div>
    );
};

export default React.memo(MessageBox);
