import style from './style.module.scss';
import Header from './component/Header';
import MyToastMessage from './component/MyToastMessage';
import CreatePatientRecordDialog from './component/CreatePatientRecordDialog';
import DialogCall from './component/DialogCall';
import DialogMyVideo from './component/DialogMyVideo';
import DialogMyImage from './component/DialogMyImage';
import DialogPatientSend from './component/DialogPatientSend';
import DialogDoctorSend from './component/DialogDoctorSend';
import TopControl from './component/TopControl';
import Overview from './component/Overview';
import Information from './component/Information';
import Service from './component/Service';
import Menu from './component/Menu';
import Page from './component/Page';

const Examine = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div className={style.main}>
                <MyToastMessage />
                <CreatePatientRecordDialog />
                <DialogCall />
                <DialogMyVideo />
                <DialogMyImage />
                <DialogPatientSend />
                <DialogDoctorSend />
                <TopControl />
                <Overview isLoading={isLoading} />
                <Information isLoading={isLoading} />
                <Service isLoading={isLoading} />
                <Menu isLoading={isLoading} />
                <Page />
            </div>
        </div>
    );
};

export default Examine;
