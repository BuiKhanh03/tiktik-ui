import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}

                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder="Search account and video" spellCheck={false}></input>
                    {/* Clear */}
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    {/* Search */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
