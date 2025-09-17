import { useRef, useEffect } from 'react';
import style from './style.module.scss';
import Search from './component/Search';
import List from './component/List';

const Body = () => {
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textarea_element.current) {
            textarea_element.current.addEventListener('input', () => {
                if (textarea_element.current) {
                    textarea_element.current.style.height = 'auto';
                    textarea_element.current.style.height = textarea_element.current.scrollHeight + 'px';
                }
            });
        }
    }, []);

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Search />
                <List />
            </div>
        </div>
    );
};

export default Body;
