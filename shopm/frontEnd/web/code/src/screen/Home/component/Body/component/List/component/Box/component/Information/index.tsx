import style from './style.module.scss';
import Skeleton from '@src/component/Skeleton';
import { MAJOR } from '@src/const/text';

const Information = () => {
    const isLoading = true;

    return (
        <div className={style.parent}>
            <div>
                <div>
                    <div>{MAJOR}</div>
                </div>
                <div>{`${MAJOR} ${MAJOR} ${MAJOR} ${MAJOR}`}</div>
            </div>
        </div>
    );
};

export default Information;
