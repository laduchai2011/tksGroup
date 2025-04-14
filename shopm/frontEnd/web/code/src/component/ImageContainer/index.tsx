import { FC, useEffect, useRef } from 'react';
import style from './style.module.scss';
import { Options } from './type';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    options?: Options;
    [key: string]: unknown;
}

const ImageContainer: FC<MyOptions> = ({ options, className, ...props }) => {
    const parent_element = useRef<HTMLImageElement | null>(null);
    const images: string[] | undefined = options?.images;

    useEffect(() => {}, []);

    const list_image =
        images &&
        images.map((data, index) => {
            return <img key={index} src={data} alt="image" />;
        });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            <div className={style.imageContainer}>{list_image}</div>
            <div className={style.controlContainer}>
                <div>1/10</div>
                <TfiAngleLeft className={style.left_button} />
                <TfiAngleRight className={style.right_button} />
            </div>
        </div>
    );
};

export default ImageContainer;
