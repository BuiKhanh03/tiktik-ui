//Hook
import { useEffect, useState } from 'react';
//class
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faHandsAslInterpreting,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
} from '@fortawesome/free-solid-svg-icons';
//import Headlesstippy
//hiển thi chú thích cho các nút (You can call is tooltip)
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
//import 'tippy.js/dist/tippy.css'; // optional
//----------------------------------------------------------------

const cx = classNames.bind(styles);

const currentUser = true;

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            //handle languge
            break;
    }
};

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faHandsAslInterpreting} />,
        title: 'Vietnamese',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Vietnamese' },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybord shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                {/* Search */}

                <HeadlessTippy
                    //Lướt qua thì hiện nhưng bấm one more time sẽ biến mất
                    interactive
                    visible={searchResult.length > 0}
                    //visible: ẩn hiện theo mong muốn
                    render={(attrs) => (
                        // tabIndex: độ ưu tiên (0, -1)
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>You may be like</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and video" spellCheck={false}></input>
                        {/* Clear */}
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </HeadlessTippy>

                {/* Nếu có thì hiện thông tin người dùng, nếu không thì hiện chỗ đăng nhập */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy trigger="click" content="Upload File" placement="left">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        //_blank: new tab
                        // End Search
                        // Button
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}>
                                Login
                            </Button>
                            {/* Menu Item*/}
                            {/* End Menu Item*/}
                        </>
                        // End Button
                    )}
                    <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e3a42949b39035e8e5fc3fe718b582d2.jpeg?lk3s=a5d48078&x-expires=1715245200&x-signature=6Id%2BMON0M6bju%2BUTQ7SpLlku2uo%3D"
                                className={cx('user-avatar')}
                                alt="Bui Duy Khanh"
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
