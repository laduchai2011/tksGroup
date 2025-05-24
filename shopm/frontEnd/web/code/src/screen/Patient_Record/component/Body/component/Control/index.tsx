import { FC, useState } from 'react';
import style from './style.module.scss';
import { rational } from '@src/utility/Mathematics';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    [key: string]: unknown;
}

const Control: FC<MyOptions> = ({ className, ...props }) => {
    const [index_selected, set_index_selected] = useState<number>(1);

    const list_page_number = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
        const opacity = rational(data, index_selected, 1, 0.3);
        const scale = rational(data, index_selected, 1.3, 0.2);

        return (
            <div
                key={index}
                title={`${data}`}
                style={{ opacity: opacity, transform: `scale(${scale})`, backgroundColor: 'rgb(236, 236, 236)' }}
                onClick={() => set_index_selected(data)}
            >
                {data}
            </div>
        );
    });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <div>Options</div>
            <div className={style.pageContainer}>
                <div style={{ left: ` calc(50% - 25px - ${index_selected - 1} * 50px)` }}>{list_page_number}</div>
            </div>
        </div>
    );
};

export default Control;
