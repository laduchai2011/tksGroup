import { memo } from 'react';
import style from './style.module.scss';

const Photo = () => {
    return (
        <div className={style.parent}>
            <div className={style.photoContainer}>
                <img
                    className={style.photo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExHK5xIJNE-7nF_cQ2zNAf9_28Dslrqu26A&s"
                    alt=""
                />
                <img
                    className={style.photo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExHK5xIJNE-7nF_cQ2zNAf9_28Dslrqu26A&s"
                    alt=""
                />
            </div>
            <div className={style.controlContainer}>
                <div className={style.dotContainer}>
                    <div className={style.circle}>
                        <div className={style.dot} />
                    </div>
                </div>
                <div className={style.options}>
                    <div className={style.option}>Image</div>
                    <div className={style.option}>Video</div>
                </div>
            </div>
        </div>
    );
};

export default memo(Photo);
