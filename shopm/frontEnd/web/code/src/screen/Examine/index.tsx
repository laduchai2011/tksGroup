import style from './style.module.scss';
import Overview from './component/Overview';
import Information from './component/Information';
import Service from './component/Service';
import Menu from './component/Menu';
import CreatePatientRecordDialog from './component/CreatePatientRecordDialog';
import ToastMessage from '@src/component/ToastMessage';

const Examine = () => {
    const isLoading = false;
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <Overview isLoading={isLoading} />
                <Information isLoading={isLoading} />
                <Service isLoading={isLoading} />
                <Menu isLoading={isLoading} />
                <CreatePatientRecordDialog />
                <ToastMessage toastMessage={{ data: { type: 'ERROR', message: '123dsfsdd sdf skdf bsdbf jsdbf' } }} />
            </div>
        </div>
    );
};

export default Examine;
