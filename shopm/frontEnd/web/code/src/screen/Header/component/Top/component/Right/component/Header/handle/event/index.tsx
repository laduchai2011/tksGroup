import {
    selections_enum,
    selections_type,
    selections_index_enum,
    selections_index_type,
} from '@src/screen/Header/component/Top/component/Right/type';

class ClickEvent {
    _parent_element: HTMLDivElement | null;
    set_selected: React.Dispatch<React.SetStateAction<selections_type>>;

    constructor(
        _parent_element: HTMLDivElement | null,
        set_selected: React.Dispatch<React.SetStateAction<selections_type>>
    ) {
        this._parent_element = _parent_element;
        this.set_selected = set_selected;
    }

    handle_notify_click = () => {
        if (this._parent_element) {
            this.set_selected(selections_enum.NOTIFY);
        }
    };

    handle_message_click = () => {
        if (this._parent_element) {
            this.set_selected(selections_enum.MESSAGE);
        }
    };

    handle_profile_click = () => {
        if (this._parent_element) {
            this.set_selected(selections_enum.PROFILE);
        }
    };

    addEventListener() {
        if (this._parent_element) {
            const headers = this._parent_element.children[0].children;

            for (let i: number = 0; i < headers.length; i++) {
                const header = headers[i];

                switch (i) {
                    case 0: {
                        (header as HTMLDivElement).addEventListener('click', this.handle_notify_click);
                        break;
                    }
                    case 1: {
                        (header as HTMLDivElement).addEventListener('click', this.handle_message_click);
                        break;
                    }
                    case 2: {
                        (header as HTMLDivElement).addEventListener('click', this.handle_profile_click);
                        break;
                    }
                    default: {
                        console.warn('Invalid Parameter');
                        break;
                    }
                }
            }
        } else {
            console.error('Create element failure !');
        }
    }

    removeEventListener() {
        if (this._parent_element) {
            const headers = this._parent_element.children[0].children;

            for (let i: number = 0; i < headers.length; i++) {
                const header = headers[i];

                switch (i) {
                    case 0: {
                        (header as HTMLDivElement).removeEventListener('click', this.handle_notify_click);
                        break;
                    }
                    case 1: {
                        (header as HTMLDivElement).removeEventListener('click', this.handle_message_click);
                        break;
                    }
                    case 2: {
                        (header as HTMLDivElement).removeEventListener('click', this.handle_profile_click);
                        break;
                    }
                    default: {
                        console.warn('Invalid Parameter');
                        break;
                    }
                }
            }
        }
    }
}

function set_pos_selected(
    _parent_element: HTMLDivElement | null,
    selected: selections_type,
    pos_selected: React.RefObject<selections_index_type>
) {
    switch (selected) {
        case selections_enum.NOTIFY: {
            pos_selected.current = selections_index_enum.NOTIFY;
            break;
        }
        case selections_enum.MESSAGE: {
            pos_selected.current = selections_index_enum.MESSAGE;
            break;
        }
        case selections_enum.PROFILE: {
            pos_selected.current = selections_index_enum.PROFILE;
            break;
        }
        default: {
            console.warn('Invalid Parameter !');
            break;
        }
    }

    if (_parent_element) {
        _parent_element.style.setProperty('--pos-selected', `${pos_selected.current}`);
    }
}

export { ClickEvent, set_pos_selected };
