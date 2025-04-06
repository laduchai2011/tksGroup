import AppRouter from '@src/router';
// import { state_props } from '@src/App/type';
// import type { RootState } from '@src/redux';
// import { useSelector } from 'react-redux';

const App = () => {
    // const state_store: state_props = useSelector((state: RootState) => state.App);
    // const top_isShow = state_store.screen.header.top_isShow;
    // const left_isShow = state_store.screen.header.left_isShow;

    return (
        <div>
            {/* <AppRouter header={<Header header__interface={{ top_isShow, left_isShow }} />} /> */}
            {/* <Header header__interface={{ top_isShow: top_isShow, left_isShow: left_isShow }} /> */}
            <AppRouter />
        </div>
    );
};

export default App;
