import PropTypes from 'prop-types';
function Menu({ children, className }) {
    return <nav className={className}>{children}</nav>;
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
};

export default Menu;
