import { useEffect, useRef, useContext } from 'react';
import style from './style.module.scss';
import { Context as Context_Hader_Top_Right } from '@src/screen/Header/component/Top/component/Right/context';
import { selections_index_enum, selections_enum } from '../../type';
import { NOTIFY, MESSAGE, PROFILE } from '@src/const/text';

const Header = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const context_value_Context_Hader_Top_Right = useContext(Context_Hader_Top_Right);

    if (context_value_Context_Hader_Top_Right === null) {
        console.warn('context_value_Context_Hader_Top_Right is null');
    }

    const handle_selected_header = () => {};

    useEffect(() => {
        const _parent_element = parent_element.current;

        function handle_notify_click() {
            if (_parent_element) {
                _parent_element.style.setProperty('--pos-selected-header', `${selections_index_enum.NOTIFY}`);
                if (context_value_Context_Hader_Top_Right?.set_selected) {
                    context_value_Context_Hader_Top_Right?.set_selected(selections_enum.NOTIFY);
                } else {
                    console.warn('This is error !');
                }
            }
        }

        function handle_message_click() {
            if (_parent_element) {
                _parent_element.style.setProperty('--pos-selected-header', `${selections_index_enum.MESSAGE}`);
                if (context_value_Context_Hader_Top_Right?.set_selected) {
                    context_value_Context_Hader_Top_Right?.set_selected(selections_enum.MESSAGE);
                } else {
                    console.warn('This is error !');
                }
            }
        }

        function handle_profile_click() {
            if (_parent_element) {
                _parent_element.style.setProperty('--pos-selected-header', `${selections_index_enum.PROFILE}`);
                if (context_value_Context_Hader_Top_Right?.set_selected) {
                    context_value_Context_Hader_Top_Right?.set_selected(selections_enum.PROFILE);
                } else {
                    console.warn('This is error !');
                }
            }
        }

        if (_parent_element) {
            const headers = _parent_element.children[0].children;

            for (let i: number = 0; i < headers.length; i++) {
                const header = headers[i];
                if (i === 0) {
                    _parent_element.style.setProperty('--pos-selected-header', `${selections_index_enum.NOTIFY}`);
                }

                switch (i) {
                    case 0: {
                        (header as HTMLDivElement).addEventListener('click', handle_notify_click);
                        break;
                    }
                    case 1: {
                        (header as HTMLDivElement).addEventListener('click', handle_message_click);
                        break;
                    }
                    case 2: {
                        (header as HTMLDivElement).addEventListener('click', handle_profile_click);
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

        return () => {
            if (_parent_element) {
                const headers = _parent_element.children[0].children;

                for (let i: number = 0; i < headers.length; i++) {
                    const header = headers[i];

                    switch (i) {
                        case 0: {
                            (header as HTMLDivElement).removeEventListener('click', handle_notify_click);
                            break;
                        }
                        case 1: {
                            (header as HTMLDivElement).removeEventListener('click', handle_message_click);
                            break;
                        }
                        case 2: {
                            (header as HTMLDivElement).removeEventListener('click', handle_profile_click);
                            break;
                        }
                        default: {
                            console.warn('Invalid Parameter');
                            break;
                        }
                    }
                }
            }
        };
    }, []);

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div>
                    <div>
                        <div>{NOTIFY}</div>
                    </div>
                    <div />
                </div>
                <div>
                    <div>
                        <div>{MESSAGE}</div>
                    </div>
                    <div />
                </div>
                <div>
                    <div>
                        <div>{PROFILE}</div>
                    </div>
                    <div />
                </div>
            </div>
            <div>
                <div />
            </div>
        </div>
    );
};

export default Header;
