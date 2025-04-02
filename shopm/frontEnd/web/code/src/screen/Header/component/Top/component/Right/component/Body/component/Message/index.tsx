import style from './style.module.scss';
import { MESSAGE, MESSAGE_GROUP, SEARCH } from '@src/const/text';
import { IoIosPeople } from 'react-icons/io';
import { BsPersonFill } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import Box from './component/Box';

const Message = () => {
    return (
        <div className={style.parent}>
            <div>
                <div>
                    <div>
                        <div>
                            <BsPersonFill />
                        </div>
                        <div>{MESSAGE}</div>
                    </div>
                    <div>99</div>
                </div>
                <div>
                    <div>
                        <div>
                            <IoIosPeople />
                        </div>
                        <div>{MESSAGE_GROUP}</div>
                    </div>
                    <div>99</div>
                </div>
            </div>
            <div>
                <div>
                    <input placeholder={SEARCH} />
                    <IoSearchOutline />
                </div>
            </div>
            <div>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    );
};

export default Message;
