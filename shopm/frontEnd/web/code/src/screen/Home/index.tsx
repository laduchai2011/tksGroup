import React from 'react';
import style from './style.module.scss';

const Home = () => {
    const [a, setA] = React.useState<number>(1);

    return (
        <div>
            <div className={style.home}>{`Home ${a}`}</div>
            <button onClick={() => setA((pre) => pre + 1)}>Click</button>
        </div>
    );
};

export default Home;
