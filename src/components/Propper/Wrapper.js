import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Propper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.prototype = {
    children: PropTypes.node.isRequired, // Anything that can be rendered: numbers, strings, elements or an array
    className: PropTypes.string,
};

export default Wrapper;
