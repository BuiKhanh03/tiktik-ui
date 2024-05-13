/*use prop-types to document the intended types of properties passed to components. 
React (and potentially other libraries—see the checkPropTypes() reference below) will check props passed to your components against those definitions, 
and warn in development if they don’t match. */
import propTypes from 'prop-types';
//class
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//----------------------------------------------------------------

const cx = classNames.bind(styles);

function AccountItem({ data, key }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: propTypes.object,
};
export default AccountItem;
