import style from './style.module.scss';
import { GoX } from 'react-icons/go';
import { DETAIL_YOUR_COMMENT } from '@src/const/text';

const CommentInputDetail = () => {
    const src = 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi-3.jpg';
    const handleClose = () => {};
    return (
        <div className={style.parent}>
            <div className={style.header}>
                <div>{DETAIL_YOUR_COMMENT}</div>
                <GoX onClick={() => handleClose()} size={25} />
            </div>
            <div className={style.body}>
                <div className={style.text}>sdfsdfjhskghskdghfk</div>
                <div className={style.imageContainer}>
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                    <img src={src} alt="" />
                </div>
                <div className={style.videoContainer}></div>
            </div>
        </div>
    );
};

export default CommentInputDetail;
