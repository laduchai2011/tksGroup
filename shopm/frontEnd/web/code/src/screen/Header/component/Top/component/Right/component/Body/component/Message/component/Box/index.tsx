import style from './style.module.scss';
import avatarnull from '../../../../../../../../../../../../asset/avatar/avatarnull.png';

const Box = () => {
    return (
        <div className={style.parent}>
            <div>
                <img src={avatarnull} alt="avatar" />
            </div>
            <div>
                <div>
                    <strong>sdfsdf sdfsdgf sdf sdgfsd fdsfsdfg gsdgsd</strong>
                </div>
                <div>dsfsdfsdf sdf sdf sdf sd fsdf sdf sdf sdfsd fds</div>
            </div>
            <div>
                <div>99</div>
            </div>
        </div>
    );
};

export default Box;
