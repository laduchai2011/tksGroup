type store_type<T> = {
    data?: T | undefined;
    [key: string]: any;
};
declare function handleConsecutive<T>(...args: ((store: store_type<T>, next: () => void) => void)[]): void;

export { handleConsecutive };
