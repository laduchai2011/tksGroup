import { memo, useEffect } from 'react';
import style from './style.module.scss';
import Box from './component/Box';
import { useGetMedicationsMutation } from '@src/redux/query/medicationRTK';

const List = () => {
    const [getMedications] = useGetMedicationsMutation();

    useEffect(() => {
        getMedications({ page: 1, size: 5 })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }, [getMedications]);

    return (
        <div className={style.parent}>
            <div className={style.main}>
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
        </div>
    );
};

export default memo(List);
