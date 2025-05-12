import { FC, useRef, useEffect, useState, memo } from 'react';
import style from './style.module.scss';
import ListImage from './component/ListImage';
import Control from './component/Control';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    [key: string]: unknown;
}

const ImageContainer: FC<MyOptions> = ({ className, ...props }) => {
    const images_container_element = useRef<HTMLImageElement | null>(null);
    const [root_LazyImageWithFile, set_root_LazyImageWithFile] = useState<HTMLDivElement | null>(null);
    console.log('ImageContainer');

    useEffect(() => {
        if (images_container_element.current) {
            set_root_LazyImageWithFile(images_container_element.current);
        }
    }, []);

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <div className={style.imageContainer} ref={images_container_element}>
                <ListImage option={{ root: root_LazyImageWithFile }} />
            </div>
            <div>
                <Control />
            </div>
        </div>
    );
};

export default memo(ImageContainer);
