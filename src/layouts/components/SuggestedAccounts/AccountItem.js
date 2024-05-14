// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import Button from '~/components/Button';
import Image from '~/components/Image';
import BuiKhanhHandsome from '~/assets/images/BuiKhanhHandsome.jpg';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <div className={cx('tippyWrapper')}>
                    <div className={cx('header')}>
                        <Image
                            src={BuiKhanhHandsome}
                            className={cx('user-avatar')}
                            alt="Bui Duy Khanh"
                            fallback=""
                        ></Image>
                        <Button text className={cx('following')}>
                            Following
                        </Button>
                    </div>
                    <div className={cx('body')}>
                        <p className={cx('item-nickname')}>
                            <strong>Bui Duy khanh</strong>
                            <FontAwesomeIcon className={cx('item-iconCheck')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('item-name')}>BuikhanhDuy</p>
                        <p className={cx('statistic')}>
                            <strong className={cx('value')}>10.0M</strong>
                            <span className={cx('label')}>Follower</span>
                            <strong className={cx('value')}>10.0M</strong>
                            <span className={cx('label')}>Likes</span>
                        </p>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            {label === 'Following Account' ? (
                <div className={cx('account-item')}>
                    <img
                        alt="Buikhanh"
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cd65126fd4091ef651c9a89cfdb4a05f~c5_720x720.jpeg?lk3s=a5d48078&amp;x-expires=1715828400&amp;x-signature=EBmCxxUkXDg7%2BsHKTc5QZPBzh88%3D"
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('item-nickname')}>
                            <strong>Bui Duy khanh</strong>
                            <FontAwesomeIcon className={cx('item-iconCheck')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('item-name')}>BuikhanhDuy</p>
                    </div>
                </div>
            ) : (
                <Tippy interactive offset={[30, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
                    <div className={cx('account-item')}>
                        <img
                            alt="Buikhanh"
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/cd65126fd4091ef651c9a89cfdb4a05f~c5_720x720.jpeg?lk3s=a5d48078&amp;x-expires=1715828400&amp;x-signature=EBmCxxUkXDg7%2BsHKTc5QZPBzh88%3D"
                            className={cx('avatar')}
                        />
                        <div className={cx('item-info')}>
                            <p className={cx('item-nickname')}>
                                <strong>Bui Duy khanh</strong>
                                <FontAwesomeIcon className={cx('item-iconCheck')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('item-name')}>BuikhanhDuy</p>
                        </div>
                    </div>
                </Tippy>
            )}
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
