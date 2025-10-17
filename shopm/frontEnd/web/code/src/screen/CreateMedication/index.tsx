import style from './style.module.scss';
import Header from './component/Header';
import Body from './component/Body';
import DialogLoading from './component/DialogLoading';
import DialogMyImage from './component/DialogMyImage';
import DialogMyVideo from './component/DialogMyVideo';
import MyToastMessage from './component/MyToastMessage';

const CreateMedication = () => {
    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div>
                <DialogLoading />
                <DialogMyImage />
                <DialogMyVideo />
                <MyToastMessage />
            </div>
            <div>
                <Body />
            </div>
        </div>
    );
};

export default CreateMedication;
