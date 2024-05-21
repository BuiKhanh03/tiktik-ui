import { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from './DefaultLayout.module.scss';
import Login from '~/components/Login';
import GetApp from '~/components/GetApp';
import { Fragment } from 'react';
import { ModalContext } from '~/components/ModalContextProvider';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const login = useContext(ModalContext);

    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <Header></Header>
                <div className={cx('container')}>
                    <SideBar></SideBar>
                    <div className={cx('content')}>{children}</div>
                    <GetApp />
                </div>
                {login.active && <Login onHide={login.handleHideModel}></Login>}
            </div>
        </Fragment>
    );
}

DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
