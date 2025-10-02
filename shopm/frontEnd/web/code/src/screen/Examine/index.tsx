import style from './style.module.scss';

import MyToastMessage from './component/MyToastMessage';
import CreatePatientRecordDialog from './component/CreatePatientRecordDialog';
import DialogPatientSend from './component/DialogPatientSend';
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
            <div className={style.main}>
                <MyToastMessage />
                <CreatePatientRecordDialog />
                <DialogPatientSend />
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
