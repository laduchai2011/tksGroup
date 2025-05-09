// Thành phần này đang responsive tại giá trị MD, hãy chú ý khi thay đổi trên mã tệp ts và trong tệp scss

class ScrollImageEvent {
    private _videos_container_element: Element;
    private _index_text_element: Element;
    private _left_btn_element: Element;
    private _right_btn_element: Element;
    private _index: number;
    private _maxAmount: number;

    constructor(
        videos_container_element: Element,
        index_text_element: Element,
        left_btn_element: Element,
        right_btn_element: Element,
        index: number,
        maxAmount: number
    ) {
        this._videos_container_element = videos_container_element;
        this._index_text_element = index_text_element;
        this._left_btn_element = left_btn_element;
        this._right_btn_element = right_btn_element;
        this._index = index;
        this._maxAmount = maxAmount;
    }

    set_index(number: number) {
        this._index = number;
    }

    private handle_scroll = (index: number) => {
        const { clientWidth } = this._videos_container_element;
        this._videos_container_element.scrollTo({
            left: index * clientWidth,
            behavior: 'smooth',
        });
    };

    private handle_left_click = () => {
        if (this._index > 0) {
            this._index = this._index - 1;
            this.handle_scroll(this._index);
            this._index_text_element.textContent = (this._index + 1).toString();
        }
    };

    private handle_right_click = () => {
        if (this._index < this._maxAmount - 1) {
            this._index = this._index + 1;
            this.handle_scroll(this._index);
            this._index_text_element.textContent = (this._index + 1).toString();
        }
    };

    addEventListener() {
        (this._left_btn_element as HTMLDivElement).addEventListener('click', this.handle_left_click);
        (this._right_btn_element as HTMLDivElement).addEventListener('click', this.handle_right_click);
    }

    removeEventListener() {
        (this._left_btn_element as HTMLDivElement).removeEventListener('click', this.handle_left_click);
        (this._right_btn_element as HTMLDivElement).removeEventListener('click', this.handle_right_click);
    }
}

export { ScrollImageEvent };
