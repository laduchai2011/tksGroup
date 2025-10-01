import { FC, memo, useRef } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { CiEdit } from 'react-icons/ci';
import { FaImage } from 'react-icons/fa';
import { EDIT, IMAGE_VIDEO } from '@src/const/text';

const Edit: FC<{ isLoading: boolean; setIsEdit: React.Dispatch<React.SetStateAction<boolean>> }> = ({
    isLoading,
    setIsEdit,
}) => {
    const icons_element = useRef<HTMLDivElement | null>(null);

    const handleEditIcon = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        if (e.currentTarget.classList.contains(style.editIcon_active)) {
            e.currentTarget.classList.remove(style.editIcon_active);
            setIsEdit(false);
        } else {
            e.currentTarget.classList.add(style.editIcon_active);
            setIsEdit(true);
        }
    };

    return (
        <div className={style.parent}>
            <div className={style.icons} ref={icons_element}>
                {isLoading ? (
                    <Skeleton className={style.editIcon} />
                ) : (
                    <CiEdit className={style.editIcon} onClick={(e) => handleEditIcon(e)} title={EDIT} color="blue" />
                )}
                {isLoading ? (
                    <Skeleton className={style.editIcon} />
                ) : (
                    <FaImage className={style.editIcon} title={IMAGE_VIDEO} color="greenyellow" />
                )}
            </div>
        </div>
    );
};

export default memo(Edit);
