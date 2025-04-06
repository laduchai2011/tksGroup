import style from './style.module.scss';
import { FiveStar } from '@src/component';
import avatarnull from '../../../../../../../../../../asset/avatar/avatarnull.png';
import { MESSAGE, GO_TO_PROFILE, FOLLOW } from '@src/const/text';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const handle_go_to_profile = () => {
        navigate('/profile');
    };

    return (
        <div className={style.parent}>
            <div className={style.avatar}>
                <div>
                    <img src={avatarnull} alt="avatar" />
                </div>
                <div>
                    <div>
                        <FiveStar rate={1.2} />
                    </div>
                </div>
                <div>
                    <strong>Name</strong>
                </div>
            </div>
            <div className={style.button1}>
                <div>{FOLLOW}</div>
                <div>{MESSAGE}</div>
            </div>
            <div className={style.button2}>
                <button onClick={() => handle_go_to_profile()}>{GO_TO_PROFILE}</button>
            </div>
        </div>
    );
};

export default Profile;
