import { memo } from 'react';
import style from './style.module.scss';
import { IoSearch } from 'react-icons/io5';
import { SEARCH } from '@src/const/text';

const Filter = () => {
    return (
        <div className={style.parent}>
            <div className={style.searchRow}>
                <div className={style.searchContainer}>
                    <input placeholder={SEARCH} title={SEARCH} />
                    <IoSearch />
                </div>
            </div>
            <div className={style.targetRow}>
                <div className={style.selectedTargets}>
                    <div>
                        <div>Được chọn:</div>
                    </div>
                    <div>
                        Target Target Target Target Target Target Target Target Target Target Target Target Target
                        Target Target Target Target Target Target Target Target Target Target Target Target Target
                        Target Target Target Target Target Target Target Target Target Target Target Target Target
                        Target Target Target Target Target Target Target Target Target
                    </div>
                </div>
                <div className={style.targetList}>
                    <div>
                        <div>Danh sách:</div>
                    </div>
                    <div>
                        Target Target Target Target Target Target Target Target Target Target Target Target Target
                        Target Target Target Target Target Target Target Target Target Target Target Target Target
                        Target Target Target Target Target Target Target Target Target Target Target Target Target
                        Target Target Target Target Target Target Target Target Target
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Filter);
