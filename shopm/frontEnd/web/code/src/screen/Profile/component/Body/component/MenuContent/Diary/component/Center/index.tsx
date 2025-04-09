import { useEffect, useState, useRef } from 'react';
import style from './style.module.scss';
import { img_list_data } from './data.test';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';
import { ResizeEvent } from './handle/event';

const Center = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const [index_img, set_index_img] = useState(0);

    console.log(img_list_data);

    const hangle_imgBtn = (type: string) => {
        if (type === 'left') {
            if (index_img > 0) {
                set_index_img((pre) => pre - 1);
            }
        } else if (type === 'right') {
            if (index_img < img_list_data.length - 1) {
                set_index_img((pre) => pre + 1);
            }
        } else {
            console.warn('Invalid type !');
        }
    };

    useEffect(() => {
        if (parent_element.current) {
            const content_element = parent_element.current.children[0].children[0];
            const moreBtn_element = parent_element.current.children[0].children[1];
            const resizeEvent = new ResizeEvent(content_element, moreBtn_element, style);

            // init moreBtn_element
            resizeEvent.handleResize();
            resizeEvent.addEventListener();

            return () => {
                resizeEvent.removeEventListener();
            };
        }
    }, []);

    useEffect(() => {
        if (parent_element.current) {
            const imgContaiar_element = parent_element.current.children[1].children[0];

            const { clientWidth } = imgContaiar_element;
            imgContaiar_element.scrollTo({
                left: index_img * clientWidth,
                behavior: 'smooth',
            });
        }
    }, [index_img]);

    const img_list = img_list_data.map((data, index) => {
        return <img key={index} src={data} alt="img" />;
    });

    return (
        <div className={style.parent} ref={parent_element}>
            <div>
                <div>
                    Giải thích từ ngữ Trong Luật này, các từ ngữ dưới đây được hiểu như sau: 1. Dược là thuốc và nguyên
                    liệu làm thuốc. 2. Thuốc là chế phẩm có chứa dược chất hoặc dược liệu dùng cho người nhằm mục đích
                    phòng bệnh, chẩn đoán bệnh, chữa bệnh, điều trị bệnh, giảm nhẹ bệnh, điều chỉnh chức năng sinh lý cơ
                    thể người bao gồm thuốc hóa dược, thuốc dược liệu, thuốc cổ truyền, vắc xin và sinh phẩm.
                </div>
                <div>More</div>
            </div>
            <div>
                <div>{img_list}</div>
                <div>{`${index_img + 1}/${img_list_data.length}`}</div>
                <div>
                    <TfiAngleLeft size={50} onClick={() => hangle_imgBtn('left')} />
                </div>
                <div>
                    <TfiAngleRight size={50} onClick={() => hangle_imgBtn('right')} />
                </div>
            </div>
        </div>
    );
};

export default Center;
