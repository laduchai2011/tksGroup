function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
    let lastFunc: ReturnType<typeof setTimeout> | null;
    let lastRan: number;

    return function (this: any, ...args: any[]) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(
                () => {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(this, args);
                        lastRan = Date.now();
                    }
                },
                limit - (Date.now() - lastRan)
            );
        }
    } as T;
}

export default throttle;
