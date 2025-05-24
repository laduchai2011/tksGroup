import Header_Common from '@src/screen/Header';

const Header = () => {
    return (
        <div>
            <Header_Common header__interface={{ top_isShow: false, left_isShow: true }} />
        </div>
    );
};

export default Header;
