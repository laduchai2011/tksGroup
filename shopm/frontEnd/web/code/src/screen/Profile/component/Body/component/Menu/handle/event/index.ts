import { RES_VALUES_WITH_PX } from '@src/const/responsive';

// Thành phần này đang responsive tại giá trị MD, hãy chú ý khi thay đổi trên mã tệp ts và trong tệp scss

class ClickEvent {
    private _selections_container_element: Element;
    private _selections_element: HTMLCollection;
    private _selections_element_when_res: HTMLCollection;
    private _len: number;
    private _style: {
        [key: string]: string;
    };

    constructor(
        selections_container_element: Element,
        selections_element: HTMLCollection,
        selections_element_when_res: HTMLCollection,
        len: number,
        style: {
            [key: string]: string;
        }
    ) {
        this._selections_container_element = selections_container_element;
        this._selections_element = selections_element;
        this._selections_element_when_res = selections_element_when_res;
        this._len = len;
        this._style = style;
    }

    init_select = (index: number) => {
        this._selections_element[index].classList.add(this._style.selected);
        this._selections_element_when_res[index].classList.add(this._style.selected_w_res);
    };

    private handle_click = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const index = target.dataset.index;

        const RES_VALUE = RES_VALUES_WITH_PX.MD;

        for (let i: number = 0; i < this._len; i++) {
            this._selections_element[i].classList.remove(this._style.selected);
            this._selections_element_when_res[i].classList.remove(this._style.selected_w_res);
        }

        if (index) {
            const h_index = Number(index);
            this._selections_element[h_index].classList.add(this._style.selected);
            this._selections_element_when_res[h_index].classList.add(this._style.selected_w_res);

            if (window.innerWidth <= RES_VALUE) {
                const { clientWidth } = this._selections_container_element;
                this._selections_container_element.scrollTo({
                    left: h_index * clientWidth,
                    behavior: 'smooth',
                });
            }
        } else {
            console.warn('index is undefine');
        }
    };

    addEventListener() {
        for (let i: number = 0; i < this._len; i++) {
            (this._selections_element[i] as HTMLDivElement).addEventListener('click', this.handle_click);
            (this._selections_element_when_res[i] as HTMLDivElement).addEventListener('click', this.handle_click);
        }
    }

    removeEventListener() {
        for (let i: number = 0; i < this._len; i++) {
            (this._selections_element[i] as HTMLDivElement).removeEventListener('click', this.handle_click);
            (this._selections_element_when_res[i] as HTMLDivElement).removeEventListener('click', this.handle_click);
        }
    }
}

export { ClickEvent };
