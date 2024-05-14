//class
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import BuiKhanhHandsome from '~/assets/images/BuiKhanhHandsome.jpg';
import { Link } from 'react-router-dom';
import { InboxIcon, MessageIcon } from '~/components/Icons';
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faHandsAslInterpreting,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faBookmark,
    faCoins,
    faCamera,
    faGhost,
    faGear,
    faCircleHalfStroke,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
//import Headlesstippy
//hiển thi chú thích cho các nút (You can call is tooltip)
import Tippy from '@tippyjs/react';
//import 'tippy.js/dist/tippy.css'; // optional
//----------------------------------------------------------------

const cx = classNames.bind(styles);

const currentUser = true;

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

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'View profile',
        to: '/@buiKhanh',
    },

    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favourites',
        to: '/@favourites',
    },

    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/@coins',
    },

    {
        icon: <FontAwesomeIcon icon={faCamera} />,
        title: 'LIVE Studio',
        to: '/@livestudoi',
    },

    {
        icon: <FontAwesomeIcon icon={faGhost} />,
        title: 'LIVE Creator Hub',
        to: '/@livecreatorhub',
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/@setting',
    },

    ...MENU_ITEM,

    {
        icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
        title: 'Dark mode',
        to: '/@darkmode',
    },

    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        seperate: true,
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>
                {/* Search */}

                <Search></Search>

                {/* Nếu có thì hiện thông tin người dùng, nếu không thì hiện chỗ đăng nhập */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <div className={cx('action-icon')}>
                            <Tippy content="Upload File">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                </button>
                            </Tippy>
                        </div>
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
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src={BuiKhanhHandsome}
                                className={cx('user-avatar')}
                                alt="Bui Duy Khanh"
                                fallback=""
                            ></Image>
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
