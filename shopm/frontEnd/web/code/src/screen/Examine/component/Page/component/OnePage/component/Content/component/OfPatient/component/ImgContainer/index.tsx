import { FC, memo, useRef, useState, useEffect } from 'react';
import style from './style.module.scss';
import LazyImg from '@src/component/LazyImg';
import Skeleton from '@src/component/Skeleton';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { IoCloseCircle } from 'react-icons/io5';
import { CLOSE, SEE_IMAGE } from '@src/const/text';

const ImgContainer: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const images_element = useRef<HTMLDivElement | null>(null);
    const [indexImg, setIndexImg] = useState<number>(1);

    useEffect(() => {
        if (images_element.current) {
            const { clientWidth } = images_element.current;
            images_element.current.scrollTo({
                left: (indexImg - 1) * clientWidth,
                behavior: 'smooth',
            });
        }
    }, [indexImg]);

    const handleBack = () => {
        if (indexImg > 1) {
            setIndexImg(indexImg - 1);
        }
    };

    const handleNext = () => {
        if (indexImg < 2) {
            setIndexImg(indexImg + 1);
        }
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.main} />
            ) : (
                <div className={style.main}>
                    <div className={style.images} ref={images_element}>
                        <LazyImg
                            className={style.image}
                            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpao8X6PNUrN1vgwedPR0FJu_IMZdA82jIag&s"
                        />
                        <LazyImg
                            className={style.image}
                            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnhFBNw9Io0hHvtv8QzH_euzwGbRJv_IC9A&s"
                        />
                    </div>
                    <div className={style.control}>
                        <IoCloseCircle className={style.close} title={CLOSE} />
                        <LiaAngleLeftSolid className={style.left} onClick={() => handleBack()} />
                        <LiaAngleRightSolid className={style.right} onClick={() => handleNext()} />
                        <div className={style.amount}>{`${indexImg}/2`}</div>
                        <div className={style.detail}>{SEE_IMAGE}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(ImgContainer);
