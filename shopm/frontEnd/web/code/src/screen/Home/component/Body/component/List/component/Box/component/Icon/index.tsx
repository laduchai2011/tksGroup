import { FC } from 'react';
import style from './style.module.scss';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineProfile } from 'react-icons/ai';
import Skeleton from '@src/component/Skeleton';

const Icon: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.skeleton} />
            ) : (
                <div className={style.examine}>
                    <div>
                        <AiOutlineProfile size={25} color="green" />
                    </div>
                    <div>Khám</div>
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.skeleton} />
            ) : (
                <div className={style.profile}>
                    <div>
                        <CgProfile size={25} color="gray" />
                    </div>
                    <div>Trang cá nhân</div>
                </div>
            )}
        </div>
    );
};

export default Icon;
