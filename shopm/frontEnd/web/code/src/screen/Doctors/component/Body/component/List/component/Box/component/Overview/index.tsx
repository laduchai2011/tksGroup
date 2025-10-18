import { FC, memo } from 'react';
import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { FiveStar } from '@src/component';
import { FOLLOW } from '@src/const/text';

const Overview: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            <div className={style.avatarContainer}>
                <div className={style.avatar}>
                    {isLoading ? (
                        <Skeleton className={style.avatar1} />
                    ) : (
                        <img
                            className={style.avatar1}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8j7l2zpQhJuLJTsnRlX0tbw5IYqgVoqzjQ&s"
                            alt=""
                        />
                    )}
                </div>
            </div>
            <div className={style.infor}>
                {isLoading ? <Skeleton className={style.name} /> : <div className={style.name}>name</div>}
                {isLoading ? (
                    <Skeleton className={style.fiveStar} />
                ) : (
                    <div className={style.fiveStar}>
                        <FiveStar rate={5} />
                    </div>
                )}
                {isLoading ? (
                    <Skeleton className={style.follow} />
                ) : (
                    <div className={style.follow}>{`${FOLLOW}: 1000`}</div>
                )}
            </div>
        </div>
    );
};

export default memo(Overview);
