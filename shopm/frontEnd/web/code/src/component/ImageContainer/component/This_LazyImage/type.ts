import { LazyImageProps } from '@src/component/LazyImage/type';

export type Options = Omit<LazyImageProps, 'src'> & {
    src: File;
};
