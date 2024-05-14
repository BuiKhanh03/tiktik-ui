import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
//Hỗ trợ active Link
import { NavLink } from 'react-router-dom';
//class
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        //NavLink sinh ra thẻ a (inline) => các thành phần nằm ngang
        //() => cx('menu-item') tương tự cx('menu-item') nhưng ta có thể chủ động custom active
        // Navlink trả về 1 object contain isActive
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.prototype = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
