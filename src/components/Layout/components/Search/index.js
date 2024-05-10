//Hook
import { useEffect, useState, useRef } from 'react';
//class
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/routes/hooks';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path Tippy!
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Search() {
    //kiểm tra trong ô tìm kiếm có giá trị hay không
    const [searchValue, setSearchValue] = useState('');
    //kiểm tra xem có kết quả tìm kiếm hay không
    const [searchResult, setSearchResult] = useState([]);
    //kiểm tra có hiện kết quả tìm kiếm hay không
    const [showResult, setShowResult] = useState(true);
    //Loading
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        //The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    //Clear kết quả trong ô tìm kiếm
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    //Xử lí ẩn kết quả nếu blur ra ngoài ô search
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            //Lướt qua thì hiện nhưng bấm one more time sẽ biến mất
            interactive
            visible={showResult && searchResult.length > 0}
            //visible: ẩn hiện theo mong muốn
            render={(attrs) => (
                // tabIndex: độ ưu tiên (0, -1)
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>You may be like</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            //Ẩn kết quả nếu blur ra ngoài ô search
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {/* Clear */}

                {/* Loading */}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}
