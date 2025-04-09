import { useRef } from 'react';
import style from './style.module.scss';
// import { TfiMore } from 'react-icons/tfi';
// import { TfiAngleLeft } from 'react-icons/tfi';
// import { TfiAngleRight } from 'react-icons/tfi';
// import avatarnull from '../../../../../../../asset/avatar/avatarnull.png';
import Top from './component/Top';
import Center from './component/Center';

const Diary = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);

    // const isLineClamped = (element: HTMLElement) => {
    //     const { scrollHeight, clientHeight } = element;
    //     return scrollHeight > clientHeight;
    // };

    // useEffect(() => {
    //     if (parent_element.current) {
    //         const content_element = parent_element.current.children[1].children[0].children[0];
    //         const more_element = parent_element.current.children[1].children[0].children[1];
    //         const _content_element = content_element as HTMLElement;

    //         const handleResize = () => {
    //             if (isLineClamped(_content_element)) {
    //                 more_element.classList.add(style.more_active);
    //             } else {
    //                 more_element.classList.remove(style.more_active);
    //             }
    //         };
    //         handleResize();
    //         window.addEventListener('resize', handleResize);

    //         return () => window.removeEventListener('resize', handleResize);
    //     }
    // }, []);

    // const [index_img, set_index_img] = useState(0);
    // useEffect(() => {
    //     if (parent_element.current) {
    //         const imgContaiar_element = parent_element.current.children[1].children[1].children[0];

    //         const { clientWidth } = imgContaiar_element;
    //         imgContaiar_element.scrollTo({
    //             left: index_img * clientWidth,
    //             behavior: 'smooth',
    //         });
    //     }
    // }, [index_img]);

    // const hangle_imgBtn = (type: string) => {
    //     if (type === 'left') {
    //         if (index_img > 0) {
    //             set_index_img((pre) => pre - 1);
    //         }
    //     } else if (type === 'right') {
    //         if (index_img < 4) {
    //             set_index_img((pre) => pre + 1);
    //         }
    //     } else {
    //         console.warn('Invalid type !');
    //     }
    // };

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.top}>
                {/* <div>
                    <img src={avatarnull} alt="avatar" />
                    <div>name name name</div>
                </div>
                <div>time</div>
                <div>
                    <TfiMore size={25} />
                </div> */}
                <Top />
            </div>
            <div className={style.center}>
                {/* <div>
                    <div>
                        Giải thích từ ngữ Trong Luật này, các từ ngữ dưới đây được hiểu như sau: 1. Dược là thuốc và
                        nguyên liệu làm thuốc. 2. Thuốc là chế phẩm có chứa dược chất hoặc dược liệu dùng cho người nhằm
                        mục đích phòng bệnh, chẩn đoán bệnh, chữa bệnh, điều trị bệnh, giảm nhẹ bệnh, điều chỉnh chức
                        năng sinh lý cơ thể người bao gồm thuốc hóa dược, thuốc dược liệu, thuốc cổ truyền, vắc xin và
                        sinh phẩm.
                    </div>
                    <div>More</div>
                </div>
                <div>
                    <div>
                        <img src={img1_demo} alt="img" />
                        <img src={img2_demo} alt="img" />
                        <img src={img1_demo} alt="img" />
                        <img src={img2_demo} alt="img" />
                    </div>
                    <div>{`${index_img + 1}/10`}</div>
                    <div>
                        <TfiAngleLeft size={50} onClick={() => hangle_imgBtn('left')} />
                    </div>
                    <div>
                        <TfiAngleRight size={50} onClick={() => hangle_imgBtn('right')} />
                    </div>
                </div> */}
                <Center />
            </div>
            <div className={style.bottom}></div>
        </div>
    );
};

export default Diary;
