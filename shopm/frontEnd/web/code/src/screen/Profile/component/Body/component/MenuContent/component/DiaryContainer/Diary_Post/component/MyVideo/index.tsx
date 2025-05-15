import { FC, useRef, memo, useContext } from 'react';
import style from './style.module.scss';
import LazyVideoWithFile from '@src/component/LazyVideoWithFile';
import { Option_props } from './type';
import { Context as Context_Diary_Post } from '@src/screen/Profile/component/Body/component/MenuContent/component/DiaryContainer/Diary_Post/context';
import { MdOutlineCancel } from 'react-icons/md';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option: Option_props;
    [key: string]: unknown;
}

const MyVideo: FC<MyOptions> = ({ option, className, ...props }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const my_src = option.my_src;

    const context_value_Context_Diary_Post = useContext(Context_Diary_Post);

    if (!context_value_Context_Diary_Post) {
        throw new Error('context_value_Context_Diary_Post is undefined');
    }

    const { videos, setVideos } = context_value_Context_Diary_Post;

    const handle_delete = () => {
        const videos_ = [...videos];
        const valueToRemove = my_src;
        const index = videos_.indexOf(valueToRemove);
        if (index !== -1) {
            videos_.splice(index, 1);
        }
        setVideos(videos_);
    };

    return (
        <div className={`${style.parent} ${className || ''}`} {...props} ref={parent_element}>
            <LazyVideoWithFile className={style.lazyVideo} src={my_src} lock_auto_play_with_scroll_snap={true} />
            <div className={style.control}>
                <MdOutlineCancel className={style.delete_button} onClick={() => handle_delete()} size={25} />
            </div>
        </div>
    );
};

export default memo(MyVideo);
