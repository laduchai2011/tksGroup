import { useRef, useEffect, useState } from 'react';
import style from './style.module.scss';
import { IoSearch } from 'react-icons/io5';
import { SEARCH } from '@src/const/text';
import { RES_VALUES_WITH_PX } from '@src/const/responsive';

// Thành phần này đang responsive tại giá trị LG, hãy chú ý khi thay đổi trên mã tệp ts và trong tệp scss

const Left = () => {
    const input2_element = useRef<HTMLDivElement | null>(null);
    const RES_VALUE = RES_VALUES_WITH_PX.LG;
    const isResponsive = useRef<boolean>(false);
    const [input_value, set_input_value] = useState('');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= RES_VALUE) {
                isResponsive.current = true;
            } else {
                isResponsive.current = false;
                input2_element.current?.classList.remove(style.input2_active);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [RES_VALUE]);

    const handle_input1_icon = () => {
        if (isResponsive.current) {
            input2_element.current?.classList.toggle(style.input2_active);
        } else {
            console.log('Thực hiện tìm kiếm theo đoạn văn bản nhận được !. (Chưa xử lý)');
        }
    };

    const handle_input = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        set_input_value(value);
    };

    return (
        <div className={style.parent}>
            <div>
                <input value={input_value} onChange={(e) => handle_input(e)} placeholder={SEARCH} />
                <IoSearch size={25} onClick={() => handle_input1_icon()} />
            </div>
            <div ref={input2_element}>
                <input value={input_value} onChange={(e) => handle_input(e)} placeholder={SEARCH} />
                <IoSearch size={25} />
            </div>
        </div>
    );
};

export default Left;
