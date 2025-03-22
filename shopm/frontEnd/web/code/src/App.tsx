import AppRouter from './router';
import Header from './screen/Header';

const App = () => {
    return (
        <div>
            <AppRouter />
            <Header header__interface={{ top_isShow: true, left_isShow: true }} />
        </div>
    );
};

export default App;
