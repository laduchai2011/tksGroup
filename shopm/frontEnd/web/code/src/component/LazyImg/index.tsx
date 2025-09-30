import { FC, useEffect, useRef, useState, memo } from 'react';
import style from './style.module.scss';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    srcImg?: string;
    alt?: string;
    root?: Element | Document | null | undefined;
}

const LazyImg: FC<ComponentProps> = ({ srcImg, alt, className, root, ...props }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!parent_element.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                root: root ?? null,
            }
        );

        observer.observe(parent_element.current);

        return () => observer.disconnect();
    }, [root]);

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            {inView && <img className={style.image} src={srcImg} alt={alt} />}
        </div>
    );
};

export default memo(LazyImg);
