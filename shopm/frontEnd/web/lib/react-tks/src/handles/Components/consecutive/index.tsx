type store_type<T> = {
    data?: T | undefined;
    [key: string]: any;
};

function handleConsecutive<T>(...args: ((store: store_type<T>, next: () => void) => void)[]): void {
    const store = { data: undefined as T | undefined };
    let gen: Generator<void, void, unknown>;

    function next() {
        setTimeout(() => {
            gen.next();
        }, 0);
    }

    function* generator(): Generator<void, void, unknown> {
        for (let arg of args) {
            yield arg(store, next);
        }
    }

    gen = generator();
    gen.next();
}

export default handleConsecutive;
