import { FC, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { Options } from './type';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';
import { ScrollImageEvent } from './handle/event';
import This_LazyImage from './component/This_LazyImage';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    options?: Options;
    [key: string]: unknown;
}

const ImageContainer: FC<MyOptions> = ({ options, className, ...props }) => {
    const parent_element = useRef<HTMLImageElement | null>(null);
    const images: File[] | undefined = options?.src_array;
    const images_container_element = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (parent_element.current && images_container_element.current && images) {
            const _images_container_element = images_container_element.current as Element;
            const index_text_element = parent_element.current.children[1].children[0].children[0] as Element;
            const left_btn_element = parent_element.current.children[1].children[1] as Element;
            const right_btn_element = parent_element.current.children[1].children[2] as Element;

            const scrollImageEvent = new ScrollImageEvent(
                _images_container_element,
                index_text_element,
                left_btn_element,
                right_btn_element,
                0,
                images.length
            );
            scrollImageEvent.addEventListener();

            return () => {
                scrollImageEvent.removeEventListener();
            };
        }
    }, [images]);

    const list_image =
        images &&
        images.map((data, index) => {
            return (
                <This_LazyImage
                    className={style.lazyImage}
                    key={index}
                    src={data}
                    root={images_container_element.current}
                    alt="image"
                />
            );
        });

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            <div className={style.imageContainer} ref={images_container_element}>
                {list_image}
            </div>
            <div className={style.controlContainer}>
                <div>
                    <div>1</div>
                    <div>/</div>
                    <div>{images?.length}</div>
                </div>
                <TfiAngleLeft className={style.left_button} />
                <TfiAngleRight className={style.right_button} />
            </div>
        </div>
    );
};

export default ImageContainer;
