import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e3a42949b39035e8e5fc3fe718b582d2.jpeg?lk3s=30310797&amp;x-expires=1714824000&amp;x-signature=kgoydfHSfOs3Zz%2Fcxdh2N7tIkx8%3D"
                class="css-1zpj2q-ImgAvatar e1e9er4e1"
                alt="avarta"
                className={cx('avatar')}
            />
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
