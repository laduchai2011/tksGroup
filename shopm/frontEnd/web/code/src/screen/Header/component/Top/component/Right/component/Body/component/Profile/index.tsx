import style from './style.module.scss';
import { FiveStar } from '@src/component';
import avatarnull from '../../../../../../../../../../asset/avatar/avatarnull.png';

const Profile = () => {
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
                <div>Follow</div>
                <div>Message</div>
            </div>
            <div className={style.button2}>
                <button>Go to profile</button>
            </div>
        </div>
    );
};

export default Profile;
