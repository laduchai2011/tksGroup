import { FC, useRef, memo, useContext, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Option_props } from './type';
import { Context as Context_Diary_Post } from '@src/screen/Profile/component/Body/component/MenuContent/component/DiaryContainer/Diary_Post/context';
import { MdOutlineCancel } from 'react-icons/md';
import { CLOSE } from '@src/const/text';

interface MyOptions extends React.HTMLProps<HTMLDivElement> {
    option: Option_props;
    [key: string]: unknown;
}

const MyVideo: FC<MyOptions> = ({ option, className, ...props }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const my_src = option.my_src;

    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        let create_url: string = '';

        if (my_src) {
            create_url = URL.createObjectURL(my_src);
            setUrl(create_url);
        }

        return () => {
            if (create_url.length > 0) {
                URL.revokeObjectURL(create_url);
                setUrl('');
            }
        };
    }, [my_src]);

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
            <video src={url} />
            <div className={style.control}>
                <MdOutlineCancel
                    className={style.delete_button}
                    onClick={() => handle_delete()}
                    size={25}
                    title={CLOSE}
                />
            </div>
        </div>
    );
};

export default memo(MyVideo);
