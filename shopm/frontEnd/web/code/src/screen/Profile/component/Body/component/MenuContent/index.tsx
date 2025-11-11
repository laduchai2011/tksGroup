import style from './style.module.scss';
import Diary_Post from './component/DiaryContainer/Diary_Post';
// import Diary from './component/DiaryContainer/Diary';
import Diarys from './component/DiaryContainer/Diarys';

const MenuContent = () => {
    return (
        <div className={style.parent}>
            <div className={style.diaryContainer}>
                <div>
                    <Diary_Post />
                </div>
                <div>
                    <Diarys />
                </div>
            </div>
        </div>
    );
};

export default MenuContent;
