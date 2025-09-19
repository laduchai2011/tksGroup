import { FC } from 'react';
import style from './style.module.scss';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineProfile } from 'react-icons/ai';
import Skeleton from '@src/component/Skeleton';
import { PROFILE, EXAMINE } from '@src/const/text';
import { useNavigate } from 'react-router-dom';

const Icon: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const navigate = useNavigate();

    const GoToProfile = () => {
        navigate('/profile');
    };

    const GoToExamine = () => {
        navigate('/examine');
    };

    return (
        <div className={style.parent}>
            {isLoading ? (
                <Skeleton className={style.skeleton} />
            ) : (
                <div className={style.examine} onClick={() => GoToExamine()}>
                    <div>
                        <AiOutlineProfile size={25} color="green" />
                    </div>
                    <div>{EXAMINE}</div>
                </div>
            )}
            {isLoading ? (
                <Skeleton className={style.skeleton} />
            ) : (
                <div className={style.profile} onClick={() => GoToProfile()}>
                    <div>
                        <CgProfile size={25} color="gray" />
                    </div>
                    <div>{PROFILE}</div>
                </div>
            )}
        </div>
    );
};

export default Icon;
