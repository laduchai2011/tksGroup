import throttle from '@src/handle/throttle';

class ResizeEvent {
    _content_element: Element;
    _moreBtn_element: Element;
    _style: {
        [key: string]: string;
    };

    constructor(
        content_element: Element,
        moreBtn_element: Element,
        style: {
            [key: string]: string;
        }
    ) {
        this._content_element = content_element;
        this._moreBtn_element = moreBtn_element;
        this._style = style;
    }

    isLineClamped = (element: HTMLElement) => {
        const { scrollHeight, clientHeight } = element;
        return scrollHeight > clientHeight;
    };

    handleResize = throttle(() => {
        const _content_element = this._content_element as HTMLElement;
        if (this.isLineClamped(_content_element)) {
            this._moreBtn_element.classList.add(this._style.more_active);
        } else {
            this._moreBtn_element.classList.remove(this._style.more_active);
        }
    }, 200);

    addEventListener = () => {
        window.addEventListener('resize', this.handleResize);
    };

    removeEventListener = () => {
        window.removeEventListener('resize', this.handleResize);
    };
}

export { ResizeEvent };
