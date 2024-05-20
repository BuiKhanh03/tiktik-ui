import { useMemo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Login.module.scss';
import { faFacebook, faGoogle, faLine, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login({ onHide }) {
    const [formState, setFormState] = useState('login');
    const [filterForm, setFilterForm] = useState([]);

    const Form = useMemo(
        () => [
            {
                type: 'login',
                title: 'Log in to Tiktok',
                items: [
                    {
                        label: 'Continue with QA code',
                        icon: faQrcode,
                    },
                    {
                        label: 'Use phone/email/username',
                        icon: faUser,
                    },
                    {
                        label: 'Continue with Facebook',
                        icon: faFacebook,
                    },
                    {
                        label: 'Continue with Google',
                        icon: faGoogle,
                    },
                    {
                        label: 'Continue with Twitter',
                        icon: faTwitter,
                    },
                    {
                        label: 'Continue with Line',
                        icon: faLine,
                    },
                    {
                        label: 'Continue with Line',
                        icon: faLine,
                    },
                    {
                        label: 'Continue with Line',
                        icon: faLine,
                    },
                    {
                        label: 'Continue with Line',
                        icon: faLine,
                    },
                ],
            },
            {
                type: 'register',
                title: 'Sign up',
                items: [
                    {
                        label: 'Continue with QA code',
                        icon: faQrcode,
                    },
                    {
                        label: 'Use phone/email/username',
                        icon: faUser,
                    },
                    {
                        label: 'Continue with Facebook',
                        icon: faFacebook,
                    },
                    {
                        label: 'Continue with Google',
                        icon: faGoogle,
                    },
                    {
                        label: 'Continue with Twitter',
                        icon: faTwitter,
                    },
                    {
                        label: 'Continue with Line',
                        icon: faLine,
                    },
                ],
            },
        ],
        [],
    );

    useEffect(() => {
        const newForm = Form.find((form) => form.type === formState);
        setFilterForm(newForm);
    }, [Form, formState]);

    return (
        <div className={cx('modal-mask')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('login-inner')}>
                        <div className={cx('login-header')}>
                            <h2 className={cx('login-header-title')}>{filterForm.title}</h2>
                        </div>
                        <div className={cx('login-body')}>
                            {filterForm.items &&
                                filterForm.items.map((item, index) => (
                                    <Button outline className={cx('login-form-btn')}>
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className={cx('login-form-btn-icon')}
                                        ></FontAwesomeIcon>
                                        <span className={cx('login-form-info')}>{item.label}</span>
                                    </Button>
                                ))}
                        </div>
                        <div className={cx('login-license')}>
                            <p className={cx('login-license-content')}>
                                By continuing with an account located in Vietnam, you agree to our Terms of
                                <Link to="/"> Service</Link> and acknowledge that you have read our
                                <Link to="/"> Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>

                    <div className={cx('login-footer')}>
                        {formState === 'login' ? (
                            <p className={cx('login-footer-content')}>
                                Don't have an account?
                                <span onClick={() => setFormState('register')}> Sign up</span>
                            </p>
                        ) : (
                            <p className={cx('login-footer-content')}>
                                Already have an account?
                                <span onClick={() => setFormState('login')}> Login</span>
                            </p>
                        )}
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
