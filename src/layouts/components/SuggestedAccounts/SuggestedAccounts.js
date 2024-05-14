import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
//class
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem label={label} />
            <AccountItem label={label} />
            <AccountItem label={label} />
            <p className={cx('see-more')}>See more</p>
        </div>
    );
}

SuggestedAccounts.prototype = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
