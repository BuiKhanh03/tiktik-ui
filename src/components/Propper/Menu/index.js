import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
import Header from './Header';
//import tippy
//hiển thi chú thích cho các nút (You can call is tooltip)
import Tippy from '@tippyjs/react/headless'; // different import path!
import { useState } from 'react';
//import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

// Tip for delay page
/*setTimeout(() => {
    debugger;
}, 2000);*/

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, ...passProps }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            //truyền các props từ bên ngoài vào
            {...passProps}
            interactive
            // visible
            delay={[0, 500]}
            offset={[10, 10]}
            placement="bottom-end"
            hideOnClick={false}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            //invoked when the tippy begins to transition out.
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
