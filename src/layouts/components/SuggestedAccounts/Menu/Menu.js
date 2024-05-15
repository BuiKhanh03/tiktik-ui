import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ data, sidebar, ...passProps }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('', { sidebar })} {...passProps}>
            <div className={cx('account-item')}>
                <Image alt={data?.avatar} src={data?.avatar} className={cx('avatar')} />
                <div className={cx('item-info')}>
                    <p className={cx('item-nickname')}>
                        <strong>{`${data.first_name} ${data.last_name}`}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('item-iconCheck')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('item-name')}>{data.nickname}</p>
                </div>
            </div>
        </Link>
    );
}

export default Menu;
