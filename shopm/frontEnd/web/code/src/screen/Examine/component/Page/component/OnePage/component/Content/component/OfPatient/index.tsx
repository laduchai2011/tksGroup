import { FC, memo, useState, useRef, useEffect } from 'react';
import style from './style.module.scss';
import { CiEdit } from 'react-icons/ci';
import { FaImage } from 'react-icons/fa';
import { EDIT, IMAGE_VIDEO } from '@src/const/text';
import LazyImage from '@src/component/LazyImage';

const OfPatient: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const icons_element = useRef<HTMLDivElement | null>(null);
    const textarea_element = useRef<HTMLTextAreaElement | null>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [descript, setDescript] = useState<string>('');

    useEffect(() => {
        if (!textarea_element.current) return;
        const textareaElement = textarea_element.current;
        function handleInput() {
            textareaElement.style.height = 'auto'; // reset trước
            textareaElement.style.height = textareaElement.scrollHeight + 'px'; // set theo chiều cao nội dung
        }
        textareaElement.addEventListener('input', handleInput);

        return () => {
            textareaElement.removeEventListener('input', handleInput);
        };
    }, []);

    const handleEditIcon = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        // e.currentTarget.classList.toggle(style.editIcon_active);

        if (e.currentTarget.classList.contains(style.editIcon_active)) {
            e.currentTarget.classList.remove(style.editIcon_active);
            setIsEdit(false);
        } else {
            e.currentTarget.classList.add(style.editIcon_active);
            setIsEdit(true);
        }
    };

    const handleDescript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setDescript(value);
    };

    return (
        <div className={style.parent}>
            <div className={style.header}>Hãy mô tả tình trạng của bạn</div>
            <div className={style.icons} ref={icons_element}>
                <CiEdit className={style.editIcon} onClick={(e) => handleEditIcon(e)} title={EDIT} color="blue" />
                <FaImage title={IMAGE_VIDEO} color="greenyellow" />
            </div>
            <div className={style.descript}>
                {isEdit && (
                    <textarea
                        rows={1}
                        className={style.descriptInput}
                        ref={textarea_element}
                        value={descript}
                        onChange={(e) => handleDescript(e)}
                        placeholder="Viết tại đây"
                    />
                )}
                {!isEdit && <div>{descript}</div>}
            </div>
        </div>
    );
};

export default memo(OfPatient);
