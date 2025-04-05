import { FC, useState } from 'react';
import './styles.css';

import WarnTriangle from 'src/components/Icon/WarnTriangle';
import ErrorCircle from 'src/components/Icon/ErrorCircle';
import TickSymbol from 'src/components/Icon/TickSymbol';
import DeleteCircle from 'src/components/Icon/DeleteCircle';
import AddCircle from 'src/components/Icon/AddCircle';
import SubCircle from 'src/components/Icon/SubCircle';
import BigLeftArrow from 'src/components/Icon/BigLeftArrow';
import BigRightArrow from 'src/components/Icon/BigRightArrow';
import BigDownArrow from 'src/components/Icon/BigDownArrow';
import BigUpArrow from 'src/components/Icon/BigUpArrow';
import ThreeDotHorizontal from 'src/components/Icon/ThreeDotHorizontal';
import ThreeDotVertical from 'src/components/Icon/ThreeDotVertical';
import DynamicBigRowArrow from 'src/components/Icon/DynamicBigRowArrow';
import OneStar from 'src/components/Icon/OneStar';
import DynamicMenu from 'src/components/Icon/DynamicMenu';

const IconScreen: FC<{}> = () => {
    const [direct, setDirect] = useState<'left' | 'right' | undefined>('right');

    const handleDirect = () => {
        if (direct === 'left') {
            setDirect('right');
        } else {
            setDirect('left');
        }
    };

    return (
        <div className="TKS-IconScreen">
            <div>
                <WarnTriangle />
                <ErrorCircle />
                <TickSymbol />
                <DeleteCircle />
                <AddCircle />
                <SubCircle />
                <BigLeftArrow />
                <BigRightArrow />
                <BigDownArrow />
                <div
                    style={{
                        margin: '10px',
                    }}
                >
                    <BigUpArrow />
                </div>
                <div>
                    <ThreeDotHorizontal />
                </div>
                <div>
                    <ThreeDotVertical />
                </div>
                <div>
                    <DynamicBigRowArrow
                        dynamicBigRowArrowProps={{
                            during_time_animation: 300,
                            direct: direct,
                        }}
                    />
                </div>
                <div>
                    <button onClick={() => handleDirect()}>DynamicBigRowArrow_Click</button>
                </div>

                <div>
                    <OneStar />
                </div>
            </div>
            <div>
                <DynamicMenu />
            </div>
        </div>
    );
};

export default IconScreen;
