import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';

import Button from '../Button';
import styles from './GetApp.module.scss';
import { CloseIcon, DesktopIcon, MobileIcon, MoveIcon } from '../Icons';
import { Wrapper as PopperWrapper } from '~/components/Propper';

const cx = classNames.bind(styles);

function GetApp() {
    const [active, setActive] = useState(false);
    const [activeGetApp, setActiveGetApp] = useState(false);

    const handleShown = () => {
        setActive(true);
    };

    const handleHidden = () => {
        setActive(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setActiveGetApp(true);
            } else {
                setActiveGetApp(false);
            }
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeadlessTippy
                    interactive
                    visible={active}
                    trigger="click"
                    placement="top-end"
                    offset={[0, -30]}
                    zIndex="99"
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('tippy-wrapper')}>
                                    <div className={cx('tippy-inner')}>
                                        <Button className={cx('tippy-btn')} leftIcon={<DesktopIcon />}>
                                            Get TikTok for desktop
                                        </Button>
                                        <Button className={cx('tippy-btn')} leftIcon={<MobileIcon />}>
                                            Get TikTok App
                                        </Button>
                                    </div>
                                    <div className={cx('tippy-close')} onClick={handleHidden}>
                                        <CloseIcon />
                                    </div>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <button className={cx('btn-getApp')} onClick={handleShown}>
                        Get app
                    </button>
                </HeadlessTippy>
            </div>
            {activeGetApp && (
                <button className={cx('back-to-top')} onClick={scrollToTop}>
                    <MoveIcon />
                </button>
            )}
        </div>
    );
}

export default GetApp;
