import React from 'react';
import style from './style.module.scss';

const Home = () => {
    console.log('home');
    const [a, setA] = React.useState<number>(1);

    React.useEffect(() => {
        console.log('mount', a);

        return () => {
            console.log('un-mount', a);
        };
    }, [a]);

    return (
        <div>
            <div className={style.home}>{`Home ${a}`}</div>
            <button onClick={() => setA((pre) => pre + 1)}>Click</button>
        </div>
    );
};

export default Home;
