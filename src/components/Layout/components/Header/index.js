//Hook
import { useEffect, useState } from 'react';
//class
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//import tippy
//hiển thi chú thích cho các nút (You can call is tooltip)
import Tippy from '@tippyjs/react/headless'; // different import path!
//import 'tippy.js/dist/tippy.css'; // optional
//----------------------------------------------------------------

const cx = classNames.bind(styles);

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
                {/* tab không được */}
                {/*tabIndex="-1" {...attrs}*/}
                {/*interactive: có thể hoạt động trong tippy*/}
                {/*visible: ẩn hiện theo mong muốn*/}

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
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
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
