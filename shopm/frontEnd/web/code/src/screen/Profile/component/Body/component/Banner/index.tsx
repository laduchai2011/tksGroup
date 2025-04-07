import style from './style.module.scss';
import bannernull from '../../../../../../asset/banner/bannernull.png';
import avatarnull from '../../../../../../asset/avatar/avatarnull.png';
import { IoMdAdd } from 'react-icons/io';
import { IoAddCircle } from 'react-icons/io5';
import { CHANGE, ADD, FOLLOW, FOLLOWED, MESSAGE, UN_FOLLOW } from '@src/const/text';
import { FiveStar } from '@src/component';

const b_url =
    'https://png.pngtree.com/background/20210711/original/pngtree-blue-flat-medical-banner-background-picture-image_1101136.jpg';

const a_url =
    'https://img.pikbest.com/png-images/20240905/nurse-doctor-and-medical-staff-avatars-white-background-vectors_10806818.png!w700wp';

const Banner = () => {
    const banner_url = b_url;
    const avatar_url: string | undefined = a_url;
    const is_follow: boolean = true;

    const handle_avatar = (): string => {
        if (avatar_url) {
            return avatar_url;
        } else {
            return avatarnull;
        }
    };

    const handle_follow_text = (): string => {
        if (is_follow) {
            return UN_FOLLOW;
        } else {
            return FOLLOW;
        }
    };

    return (
        <div className={style.parent}>
            <div className={style.bannerContainer}>
                {banner_url ? (
                    <div className={style.bannerBox}>
                        <img src={banner_url} alt="banner" />
                        <div className={style.change_button} title={CHANGE}>
                            {CHANGE}
                        </div>
                    </div>
                ) : (
                    <div className={style.bannerBox_NULL}>
                        <img src={bannernull} alt="banner" />
                        <IoMdAdd className={style.add_button} size={50} title={ADD} />
                    </div>
                )}
            </div>
            <div className={style.avatarContainer}>
                <div className={style.avatarBox}>
                    <img src={handle_avatar()} alt="avatar" />
                    <IoAddCircle size={30} title={CHANGE} />
                </div>
                <div className={style.inforBox}>
                    <div>
                        <div className={style.nameBox}>
                            <div>Name Name Name Name Name Name Name Name Name Name Name Name Name</div>
                            <div>
                                <FiveStar rate={2.2} />
                            </div>
                            <div>{`${FOLLOWED}: 1000`}</div>
                        </div>
                    </div>
                    <div>
                        <div className={style.buttonBox}>
                            <div title={MESSAGE}>{MESSAGE}</div>
                            <div title={handle_follow_text()}>{handle_follow_text()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
