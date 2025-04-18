import style from './style.module.scss';
// import type { AppDispatch } from '@src/redux';
// import { useDispatch } from 'react-redux';
// import { set_header_screen_top_isShow, set_header_screen_left_isShow } from '@src/redux/slice/App';
import Header from './component/Header';
import Body from './component/Body';

const Home = () => {
    // const dispatch = useDispatch<AppDispatch>();
    // dispatch(set_header_screen_top_isShow(true));
    // dispatch(set_header_screen_left_isShow(true));

    return (
        <div className={style.parent}>
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
        </div>
    );
};

export default Home;
