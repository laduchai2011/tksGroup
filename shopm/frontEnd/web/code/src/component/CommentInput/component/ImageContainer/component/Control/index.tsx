import { FC, memo, useContext } from 'react';
import style from './style.module.scss';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';
import { MdOutlineCancel } from 'react-icons/md';
import { Context as Context_CommentInput } from '@src/component/CommentInput/context';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    [key: string]: unknown;
}

const Control: FC<MyOptions> = ({ className, ...props }) => {
    const context_value_Context_CommentInput = useContext(Context_CommentInput);

    if (!context_value_Context_CommentInput) {
        throw new Error('context_value_Context_CommentInput is undefined');
    }

    const { images, imageContainer, setImageContainer, setImages } = context_value_Context_CommentInput;

    const index: number = imageContainer.index;
    const imagesLength: number = images.length;

    const handle_decrease_index = () => {
        if (index > 0) {
            setImageContainer({
                index: index - 1,
            });
        }
    };

    const handle_increase_index = () => {
        if (index < imagesLength - 1) {
            setImageContainer({
                index: index + 1,
            });
        }
    };

    const handle_delete = () => {
        const images_ = [...images];
        images_.splice(index, 1);
        setImages(images_);
    };

    return (
        <div className={`${style.parent} ${className || ''}`} {...props}>
            <div>
                <div>{index + 1}</div>
                <div>/</div>
                <div>{imagesLength}</div>
            </div>
            <TfiAngleLeft onClick={() => handle_decrease_index()} className={style.left_button} />
            <TfiAngleRight onClick={() => handle_increase_index()} className={style.right_button} />
            <MdOutlineCancel onClick={() => handle_delete()} className={style.delete_button} />
        </div>
    );
};

export default memo(Control);
