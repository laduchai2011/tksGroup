import React, { FC, useRef, useEffect } from 'react';
import './styles.css';

import { OneStarProps } from 'src/define';

interface MyOneStarProps extends React.HTMLProps<SVGSVGElement> {
    oneStar?: OneStarProps;
    [key: string]: any;
}

const OneStar: FC<MyOneStarProps> = ({ oneStar, className, ...props }) => {
    const oneStarElement = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (oneStarElement.current) {
        }
    }, []);

    return (
        <svg
            className={`TKS-OneStar ${className || ''}`}
            ref={oneStarElement}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* <path d="M12,1 L15,9 L19,23 L12,18 L1,9 L9,9 L23,9 L16,14 L5,23 L8,14 Z" /> */}
            <path d="M12,1 L15,9 L19,23 L12,18 L1,9 L9,9 L23,9 L16,14 L5,23 L8,14 Z" />
            {props.children}
        </svg>
    );
};

export default React.memo(OneStar);
