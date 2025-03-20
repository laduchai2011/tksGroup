import React, { FC, useRef, useEffect, useState } from 'react';
import './styles.css';

import { DynamicBigRowArrowProps } from 'src/define';

interface MyDynamicBigRowArrowProps extends React.HTMLProps<SVGSVGElement> {
    dynamicBigRowArrowProps?: DynamicBigRowArrowProps;
    [key: string]: any;
}

const DynamicBigRowArrow: FC<MyDynamicBigRowArrowProps> = ({ dynamicBigRowArrowProps, className, ...props }) => {
    const dynamicBigRowArrowElement = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (dynamicBigRowArrowElement.current) {
            dynamicBigRowArrowProps?.fill &&
                dynamicBigRowArrowElement.current.style.setProperty('--fill', `${dynamicBigRowArrowProps.fill}`);
            dynamicBigRowArrowProps?.stroke &&
                dynamicBigRowArrowElement.current.style.setProperty('--stroke', `${dynamicBigRowArrowProps.stroke}`);
            dynamicBigRowArrowProps?.stroke_width &&
                dynamicBigRowArrowElement.current.style.setProperty(
                    '--stroke-width',
                    `${dynamicBigRowArrowProps.stroke_width}`
                );
        }
    }, [dynamicBigRowArrowProps]);

    const direct = dynamicBigRowArrowProps?.direct;

    const during_time: number = dynamicBigRowArrowProps?.during_time_animation
        ? dynamicBigRowArrowProps?.during_time_animation
        : 3000;
    const time_per_1_x: number = during_time / 12;
    const time_per_0dot1_x: number = time_per_1_x / 10;

    const center_of_rectangle_x: number = 12;
    const [offset_x, set_offset_x] = useState<number>(() => {
        switch (direct) {
            case 'left': {
                return 12;
            }
            case 'right': {
                return 0;
            }
            default: {
                return 0;
            }
        }
    });

    const offset_x_increase = (offset_x: number, interval: NodeJS.Timer): number => {
        if (offset_x < 12) {
            return offset_x + 0.1;
        } else {
            clearInterval(interval);
            return offset_x;
        }
    };

    const offset_x_decrease = (offset_x: number, interval: NodeJS.Timer): number => {
        if (offset_x > 0.1) {
            return offset_x - 0.1;
        } else {
            clearInterval(interval);
            return offset_x;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            set_offset_x((pre) => {
                switch (direct) {
                    case 'left': {
                        return offset_x_decrease(pre, interval);
                    }
                    case 'right': {
                        return offset_x_increase(pre, interval);
                    }
                    default: {
                        return offset_x_increase(pre, interval);
                    }
                }
            });
        }, time_per_0dot1_x);
    }, [time_per_0dot1_x, direct]);

    return (
        <svg
            className={`TKS-DynamicBigRowArrow ${className || ''}`}
            ref={dynamicBigRowArrowElement}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            {...props}
        >
            <path d="M0,0 L24,0 L24,24 L0,24 Z" />
            <path
                d={`M${center_of_rectangle_x + offset_x},0 L${center_of_rectangle_x + 12 - offset_x},12 L${
                    center_of_rectangle_x + offset_x
                },24 L${center_of_rectangle_x - 12 + offset_x},24 L${center_of_rectangle_x - offset_x},12 L${
                    center_of_rectangle_x - 12 + offset_x
                },0 L${center_of_rectangle_x + offset_x},0 Z`}
            />
            <path
                d={`M${center_of_rectangle_x - 6 + offset_x},0 L${center_of_rectangle_x + 6 - offset_x},12 L${
                    center_of_rectangle_x - 6 + offset_x
                },24 L${center_of_rectangle_x + 6 - offset_x},12 L${center_of_rectangle_x - 6 + offset_x},0 Z`}
            />
            {props.children}
        </svg>
    );
};

export default React.memo(DynamicBigRowArrow);
