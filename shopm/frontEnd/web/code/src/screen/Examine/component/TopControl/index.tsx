import { memo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const TopControl = () => {
    const res = 1024; // md
    const res_rate = 1;
    const [page, setPage] = useState<number>(1);
    const barPageNumber_element = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (barPageNumber_element.current) {
            const vw = window.innerWidth;
            let newLeft = 0;
            if (vw <= res) {
                newLeft = -1 * ((50 * (page - 1)) / res) * vw * res_rate;
            } else {
                newLeft = -1 * (50 * (page - 1));
            }
            barPageNumber_element.current.style.transition = 'left 0.3s linear';
            barPageNumber_element.current.style.left = `${newLeft}px`;
        }
    }, [page]);

    useEffect(() => {
        const handleResize = () => {
            if (barPageNumber_element.current) {
                barPageNumber_element.current.style.transition = 'left 0s linear';
                const number_div = barPageNumber_element.current.children[0] as HTMLDivElement;
                const number_width = number_div.getBoundingClientRect().width;
                const vw = window.innerWidth;
                if (vw <= res) {
                    const newLeft = -1 * number_width * (page - 1);
                    barPageNumber_element.current.style.left = `${newLeft}px`;
                }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [page]);

    const handleBackPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < 5) {
            setPage(page + 1);
        }
    };

    return (
        <div className={style.parent}>
            <div className={style.header}>Bạn chưa tạo bệnh án</div>
            <div className={style.control}>
                <div>
                    <div className={style.icons}>
                        <GoChevronLeft onClick={() => handleBackPage()} />
                        <div>
                            <div ref={barPageNumber_element}>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>
                        </div>
                        <GoChevronRight onClick={() => handleNextPage()} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(TopControl);
