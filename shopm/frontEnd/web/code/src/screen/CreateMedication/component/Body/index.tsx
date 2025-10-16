import { memo, useState } from 'react';
import style from './style.module.scss';
import { CREATE_MEDICATION, TITLE, FRAGILE, NORMAL, OTHER, TYPE, AMOUNT } from '@src/const/text';
import InputBasic from '@src/component/InputBasic';
import TextareaBasic from '@src/component/TextareaBasic';

const Body = () => {
    const [typeGroup, setTypeGroup] = useState<number | undefined>(undefined);

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div className={style.header}>
                    <div>{CREATE_MEDICATION}</div>
                </div>
                <div className={style.infor}>
                    <div>
                        <TextareaBasic className={style.myInput} header={TITLE} />
                        <InputBasic className={style.myInput} header={TYPE} />
                        <InputBasic className={style.myInput} header={AMOUNT} />
                        {/* <div className={style.titleContainer}>
                            <div className={style.titleHeader} ref={titleHeader_element}>
                                {TITLE}
                            </div>
                            <textarea ref={titleInput_element} rows={1} wrap="soft" />
                        </div>
                        <div className={style.typeGroup}>
                            <div>
                                <div className={typeGroup === 0 ? style.active : ''} onClick={() => setTypeGroup(0)}>
                                    {NORMAL}
                                </div>
                                <div className={typeGroup === 1 ? style.active : ''} onClick={() => setTypeGroup(1)}>
                                    {FRAGILE}
                                </div>
                                <div className={typeGroup === 2 ? style.active : ''} onClick={() => setTypeGroup(2)}>
                                    {OTHER}
                                </div>
                            </div>
                            <div>{typeGroup === 2 && <input placeholder={OTHER} />}</div>
                        </div>
                        <div className={style.typeContainer}>
                            <div className={style.typeHeader} ref={typeHeader_element}>
                                {TYPE}
                            </div>
                            <input ref={typeInput_element} />
                        </div>
                        <div className={style.amountContainer}>
                            <div className={style.amountHeader} ref={amountHeader_element}>
                                {AMOUNT}
                            </div>
                            <input ref={amountInput_element} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Body);
