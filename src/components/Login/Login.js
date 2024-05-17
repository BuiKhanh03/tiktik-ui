import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faQrcode, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Login.module.scss';
import { faFacebook, faGoogle, faLine, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Login({ onHide }) {
    return (
        <div className={cx('login')}>
            <div className={cx('content-login')}>
                <div className={cx('login-component')}>
                    <div className={cx('login-header')}>
                        <h2 className={cx('login-header-title')}>Log in to Tiktok</h2>
                    </div>
                    <div className={cx('login-body')}>
                        <div className={cx('login-form')}>
                            <Button outline className={cx('login-form-btn')}>
                                <FontAwesomeIcon
                                    icon={faQrcode}
                                    className={cx('login-form-form-icon')}
                                ></FontAwesomeIcon>
                                <span className={cx('login-form-info')}>Continue with QA code</span>
                            </Button>
                        </div>
                        <div className={cx('login-form')}>
                            <Button outline className={cx('login-form-btn')}>
                                <FontAwesomeIcon icon={faUser} className={cx('login-form-form-icon')}></FontAwesomeIcon>
                                <span className={cx('login-form-info')}>Use phone/email/username</span>
                            </Button>
                        </div>
                        <div className={cx('login-form')}>
                            <Button outline className={cx('login-form-btn')}>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className={cx('login-form-form-icon')}
                                ></FontAwesomeIcon>
                                <span className={cx('login-form-info')}>Continue with Facebook</span>
                            </Button>
                        </div>
                        <div className={cx('login-form')}>
                            <Button outline className={cx('login-form-btn')}>
                                <FontAwesomeIcon
                                    icon={faGoogle}
                                    className={cx('login-form-form-icon')}
                                ></FontAwesomeIcon>
                                <span className={cx('login-form-info')}>Continue with Google</span>
                            </Button>
                        </div>
                        <div className={cx('login-form')}>
                            <Button outline className={cx('login-form-btn')}>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className={cx('login-form-form-icon')}
                                ></FontAwesomeIcon>
                                <span className={cx('login-form-info')}>Continue with Twitter</span>
                            </Button>
                        </div>
                        <div className={cx('login-form')}>
                            <Button outline className={cx('login-form-btn')}>
                                <FontAwesomeIcon icon={faLine} className={cx('login-form-form-icon')}></FontAwesomeIcon>
                                <span className={cx('login-form-info')}>Continue with Line</span>
                            </Button>
                        </div>
                    </div>
                    <div className={cx('login-footer')}>
                        <p className={cx('login-footer-content')}>
                            Don't have an account?
                            <span> Sign up</span>
                        </p>
                    </div>

                    <div className={cx('login-cancel')} onClick={onHide}>
                        <FontAwesomeIcon className={cx('login-cancel-icon')} icon={faXmark}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
