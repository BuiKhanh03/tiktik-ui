import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="#" alt="avarta" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Bùi Duy Khánh</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>buiduykhanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
