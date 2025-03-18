import React from 'react';

const Home = () => {
    const [a, setA] = React.useState<number>(1);

    React.useEffect(() => {
        setA((pre) => pre + 1);
    }, []);

    return <div>{`Home ${a}`}</div>;
};

export default Home;
