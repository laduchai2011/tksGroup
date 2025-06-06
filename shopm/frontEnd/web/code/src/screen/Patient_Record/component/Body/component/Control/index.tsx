import { FC } from 'react';
import style from './style.module.scss';
import { rational } from '@src/utility/Mathematics';
import { Control_Options } from './type';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option: Control_Options;
    [key: string]: unknown;
}

const Control: FC<MyOptions> = ({ option, className, ...props }) => {
    const handlePage = (page: number) => {
        option.setPage(page);
    };

    const list_page_number = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
        const opacity = rational(data, option.page, 1, 0.3);
        const scale = rational(data, option.page, 1.3, 0.2);

        return (
            <div
                key={index}
                title={`${data}`}
                style={{ opacity: opacity, transform: `scale(${scale})`, backgroundColor: 'rgb(236, 236, 236)' }}
                onClick={() => handlePage(data)}
            >
                {data}
            </div>
        );
    });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <div>Options</div>
            <div className={style.pageContainer}>
                <div style={{ left: ` calc(50% - 25px - ${option.page - 1} * 50px)` }}>{list_page_number}</div>
            </div>
        </div>
    );
};

export default Control;
