import style from './style.module.scss';
import Header from './component/Header';
import Body from './component/Body';
import DialogMyImage from './component/DialogMyImage';
import DialogMyVideo from './component/DialogMyVideo';
import MyToastMessage from './component/MyToastMessage';
import DialogCreateShoppingCart from './component/DialogCreateShoppingCart';

const Medication = () => {
    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div>
                <DialogMyImage />
                <DialogMyVideo />
                <MyToastMessage />
                <DialogCreateShoppingCart />
            </div>
            <div>
                <Body />
            </div>
        </div>
    );
};

export default Medication;
