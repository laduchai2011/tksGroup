import { FC, memo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Skeleton from '@src/component/Skeleton';

const ProgressChange: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const content_element = useRef<HTMLDivElement | null>(null);
    const rowHeight = 30;
    const allProgress = useRef<string[]>(['tien trinh 4', 'tien trinh 3', 'tien trinh 2', 'tien trinh 1', 'bat dau']);
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        if (!content_element.current) return;
        const contentElement = content_element.current;
        if (isShow) {
            const height = allProgress.current.length * rowHeight;
            contentElement.style.height = `${height}px`;
        } else {
            contentElement.style.height = '0';
        }
    }, [isShow]);

    const list_progress = allProgress.current.map((data, index) => {
        return (
            <div className={style.row} key={index}>
                <div>{allProgress.current.length - index}</div>
                <div>{data}</div>
            </div>
        );
    });

    return isLoading ? (
        <Skeleton className={style.parentLoading} />
    ) : (
        <div className={style.parent}>
            <div className={style.header}>
                <div>Theo dõi tiến trình</div>
                {isShow && <BiChevronUp className={style.icon} onClick={() => setIsShow(false)} />}
                {!isShow && <BiChevronDown className={style.icon} onClick={() => setIsShow(true)} />}
            </div>
            <div className={style.content} ref={content_element}>
                {list_progress}
            </div>
        </div>
    );
};

export default memo(ProgressChange);
