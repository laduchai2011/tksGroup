import { LazyVideoProps } from '@src/component/LazyVideo/type';

export type Options = Omit<LazyVideoProps, 'src'> & {
    src: File;
};
