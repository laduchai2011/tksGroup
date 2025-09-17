import style from './style.module.scss';
import Box from './component/Box';

const List = () => {
    return (
        <div className={style.parent}>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
        </div>
    );
};

export default List;
