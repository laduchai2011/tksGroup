import { FC, useEffect, useRef } from 'react';
import style from './style.module.scss';
import Page from './component/Page';
import { PageList_Options } from './type';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option: PageList_Options;
    [key: string]: unknown;
}

const PageList: FC<MyOptions> = ({ option, className, ...props }) => {
    const page = option.page;
    const page_elements = useRef<(HTMLDivElement | null)[]>([]);
    const page_before = useRef<number>(page);

    useEffect(() => {
        if (!page_elements.current) return;
        const page_element = page_elements.current[page - 1];
        const page_before_element = page_elements.current[page_before.current - 1];

        if (!page_element) return;
        if (!page_before_element) return;

        const rect = page_element.getBoundingClientRect();
        const page_top = rect.top + window.scrollY;
        const height_top = rect.height;

        page_before_element.style.backgroundColor = 'white';
        page_element.style.backgroundColor = '#f0f0f0';

        window.scrollTo({
            top: page_top - height_top - 5,
            behavior: 'smooth', // hoặc 'auto'
        });

        return () => {
            page_before.current = page;
        };
    }, [page]);

    const list_page = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((data, index) => {
        return (
            <Page
                className={style.page}
                key={index}
                ref={(el: HTMLDivElement | null) => {
                    page_elements.current[index] = el;
                }}
                option={{ data: data, index: index + 1 }}
            />
        );
    });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            {list_page}
        </div>
    );
};

export default PageList;
