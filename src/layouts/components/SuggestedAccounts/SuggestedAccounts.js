import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
//class
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data }) {
    return (
        <div className={cx('wrapper')}>
            <AccountItem label={label} data={data} />
        </div>
    );
}

SuggestedAccounts.prototype = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
