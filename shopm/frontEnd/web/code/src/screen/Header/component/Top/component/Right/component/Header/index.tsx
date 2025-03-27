import { useEffect, useRef } from 'react';
import style from './style.module.scss';
import { NOTIFY, MESSAGE, PROFILE } from '@src/const/text';
import { INDEX_OF_NOTYFY_HEADER, INDEX_OF_MESSAGE_HEADER, INDEX_OF_PROFILE_HEADER } from './const';

const Header = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const _parent_element = parent_element.current;

        function handle_notify_click() {
            if (_parent_element) {
                _parent_element.style.setProperty('--pos-selected-header', `${INDEX_OF_NOTYFY_HEADER}`);
            }
        }

        function handle_message_click() {
            if (_parent_element) {
                _parent_element.style.setProperty('--pos-selected-header', `${INDEX_OF_MESSAGE_HEADER}`);
            }
        }

        function handle_profile_click() {
            if (_parent_element) {
                _parent_element.style.setProperty('--pos-selected-header', `${INDEX_OF_PROFILE_HEADER}`);
            }
        }

        if (_parent_element) {
            const headers = _parent_element.children[0].children;

            for (let i: number = 0; i < headers.length; i++) {
                const header = headers[i];
                if (i === 0) {
                    _parent_element.style.setProperty('--pos-selected-header', `${INDEX_OF_NOTYFY_HEADER}`);
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
