import { FC, useEffect, useState } from 'react';
import LazyImage from '@src/component/LazyImage';
import { Options } from './type';

const This_LazyImage: FC<Options> = ({ src, alt, className, root }) => {
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

    return <LazyImage className={`${className || ''}`} src={url} root={root} alt={alt} />;
};

export default This_LazyImage;
