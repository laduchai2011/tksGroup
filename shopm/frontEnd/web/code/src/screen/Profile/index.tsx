import style from './style.module.scss';
import Header from './component/Header';
import Body from './component/Body';
import CommentBox from '@src/component/CommentBox';
import CommentInputDetail from '@src/component/CommentInputDetail';
import VideoPlayBox from '@src/component/VideoPlayBox';
import { useSelector } from 'react-redux';
import type { RootState } from '@src/redux';
import { state_props as state_props_VideoPlayBox } from '@src/component/VideoPlayBox/type';

const Profile = () => {
    const state_store_VideoPlayBox: state_props_VideoPlayBox = useSelector(
        (state: RootState) => state.VideoPlayBoxSlice
    );

    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <CommentBox />
                {/* <CommentInputDetail /> */}
                {state_store_VideoPlayBox.isShowComponent && <VideoPlayBox />}
            </div>
        </div>
    );
};

export default Profile;
