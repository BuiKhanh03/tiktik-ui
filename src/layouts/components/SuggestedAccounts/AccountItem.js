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
import Menu from './Menu';

const cx = classNames.bind(styles);

function AccountItem({ label, sidebar, data, ...passProps }) {
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
            {label === 'Following accounts' && data.is_followed ? (
                <Menu sidebar={sidebar} data={data} {...passProps} fallback=""></Menu>
            ) : null}
            {label === 'Suggested Account' ? (
                <Tippy interactive offset={[30, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
                    <Menu sidebar={sidebar} data={data} {...passProps}></Menu>
                </Tippy>
            ) : null}
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
