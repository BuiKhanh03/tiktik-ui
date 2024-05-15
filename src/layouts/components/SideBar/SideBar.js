import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    HashtagIcon,
    MusicIcon,
    LicenseIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/layouts/components/SuggestedAccounts/SuggestedAccounts';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SideBar() {
    const currentUser = false;

    const [suggests, setSuggests] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        if (seeAll) {
            fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=16')
                .then((response) => response.json())
                .then((response) => setSuggests(response.data))
                .catch((err) => console.error(err));
        } else {
            fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5')
                .then((response) => response.json())
                .then((response) => setSuggests(response.data))
                .catch((err) => console.error(err));
        }
    }, [seeAll]);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {/* Header */}
                <div className={cx('sidebar-header')}>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                    <MenuItem
                        title="Live"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </div>
                {/* Body */}
                <div className={cx('sidebar-body')}>
                    {/* Suggested and Following */}
                    <div className={cx('suggested')}>
                        <p className={cx('label')}>Suggested Account</p>
                        {suggests.map((suggest) => {
                            return (
                                <SuggestedAccounts
                                    label="Suggested Account"
                                    key={suggest.id}
                                    data={suggest}
                                ></SuggestedAccounts>
                            );
                        })}
                        {seeAll ? (
                            <div className={cx('see-more')} onClick={() => setSeeAll(false)}>
                                See less
                            </div>
                        ) : (
                            <div className={cx('see-more')} onClick={() => setSeeAll(true)}>
                                See all
                            </div>
                        )}
                    </div>

                    {/* Log in to see following */}

                    {!currentUser && (
                        <div className={cx('log-in')}>
                            <p className={cx('login-title')}>
                                Log in to follow creators, like videos, and view comments.
                            </p>
                            <Button primary large className="login-button">
                                Log in
                            </Button>
                        </div>
                    )}
                    {currentUser && (
                        <div className={cx('following')}>
                            <p className={cx('label')}>Following accounts</p>
                            {suggests.map((suggest) => {
                                return (
                                    <SuggestedAccounts
                                        label="Following accounts"
                                        key={suggest.id}
                                        data={suggest}
                                    ></SuggestedAccounts>
                                );
                            })}
                            <div className={cx('see-more')}>See more</div>
                        </div>
                    )}
                    {/* Discover */}

                    <div className={cx('discover')}>
                        <div className={cx('discover-header')}>Discover</div>
                        <div className={cx('discover-body')}>
                            <div className={cx('discover-item')}>
                                <HashtagIcon className={'discover-icon'}></HashtagIcon>
                                <span className="discover-title">suthatla</span>
                            </div>
                            <div className={cx('discover-item')}>
                                <HashtagIcon className={'discover-icon'}></HashtagIcon>
                                <span className="discover-title">suthatla</span>
                            </div>
                            <div className={cx('discover-item')}>
                                <HashtagIcon className={'discover-icon'}></HashtagIcon>
                                <span className="discover-title">SaiGon Va Em</span>
                            </div>
                            <div className={cx('discover-item')}>
                                <MusicIcon className={'discover-icon'}></MusicIcon>
                                <span className="discover-title">Chung Ta Cua Hien Tai</span>
                            </div>
                            <div className={cx('discover-item')}>
                                <MusicIcon className={'discover-icon'}></MusicIcon>
                                <span className="discover-title">Chung ta Cua Tuong Lai</span>
                            </div>
                            <div className={cx('discover-item')}>
                                <MusicIcon className={'discover-icon'}></MusicIcon>
                                <span className="discover-title">Lay em roi lay gi an</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className={cx('sidebar-footer')}>
                    <div className={cx('link')}>
                        <Link className={cx('link-item')} to={config.routes.about}>
                            About
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.tiktokbrowse}>
                            Tiktok browse
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.newsroom}>
                            News room
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.contact}>
                            Contact
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.bytedance}>
                            Byte dance
                        </Link>
                    </div>
                    <div className={cx('link')}>
                        <Link className={cx('link-item')} to={config.routes.about}>
                            Tiktok for good
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.tiktokbrowse}>
                            Advertise
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.newsroom}>
                            Developers
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.contact}>
                            Transparency
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.bytedance}>
                            Tiktok reward
                        </Link>
                    </div>
                    <div className={cx('link')}>
                        <Link className={cx('link-item')} to={config.routes.about}>
                            Help
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.tiktokbrowse}>
                            Safety
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.newsroom}>
                            Terms
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.contact}>
                            Privacy
                        </Link>
                        <Link className={cx('link-item')} to={config.routes.bytedance}>
                            Community guide
                        </Link>
                    </div>
                    <p className={cx('license')}>
                        <LicenseIcon></LicenseIcon>
                        <span className={cx('licenseof')}>2024 TikTok - Made by Bui Khanh</span>
                    </p>
                </div>
            </Menu>
        </aside>
    );
}

export default SideBar;
