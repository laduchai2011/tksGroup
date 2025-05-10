import { FC, useEffect, useState } from 'react';
import style from './style.module.scss';
import LazyVideo from '@src/component/LazyVideo';
import { Options } from './type';

const This_LazyVideo: FC<Options> = ({ src, className, root }) => {
    const [url, setUrl] = useState<string>('');
    useEffect(() => {
        let create_url: string = '';
        if (src) {
            create_url = URL.createObjectURL(src);
            setUrl(create_url);
        }
        return () => {
            if (create_url.length > 0) {
                URL.revokeObjectURL(create_url);
                setUrl('');
            }
        };
    }, [src]);

    return url.length > 0 && <LazyVideo className={`${style.parent} ${className || ''}`} src={url} root={root} />;
};

export default This_LazyVideo;
