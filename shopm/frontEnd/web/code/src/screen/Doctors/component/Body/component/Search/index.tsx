import { useRef, useEffect } from 'react';
import style from './style.module.scss';
import { IoSend } from 'react-icons/io5';
import { SEND } from '@src/const/text';

const Search = () => {
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textareaElement = textarea_element.current;
        if (!textareaElement) return;

        function autoRow() {
            if (textareaElement) {
                textareaElement.style.height = 'auto';
                textareaElement.style.height = textareaElement.scrollHeight + 'px';
            }
        }

        textareaElement.addEventListener('input', autoRow);

        return () => {
            if (!textareaElement) return;
            textareaElement.removeEventListener('input', autoRow);
        };
    }, []);

    return (
        <div className={style.parent}>
            <div>
                <h2>Tìm kiếm tư vấn nhanh</h2>
            </div>
            <div>
                <div className={style.inputContainer}>
                    <textarea ref={textarea_element} rows={1} wrap="soft" />
                    <IoSend title={SEND} size={30} color="gray" />
                </div>
            </div>
        </div>
    );
};

export default Search;
