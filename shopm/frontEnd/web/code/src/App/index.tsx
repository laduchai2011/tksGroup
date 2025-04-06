import { useState } from 'react';
import AppRouter from '../router';
import Header from '../screen/Header';
import { state_props } from '@src/App/type';

const App = () => {
    const [state, set_state] = useState<state_props>();
    return (
        <div>
            <AppRouter />
            <Header header__interface={{ top_isShow: true, left_isShow: true }} />
        </div>
    );
};

export default App;
