import classNames from 'classnames/bind';
//Hook
import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path Tippy!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
//class
import styles from './Search.module.scss';
import * as searchService from '~/services/search';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Propper';

const cx = classNames.bind(styles);

export default function Search() {
    //kiểm tra trong ô tìm kiếm có giá trị hay không
    const [searchValue, setSearchValue] = useState('');
    //kiểm tra xem có kết quả tìm kiếm hay không
    const [searchResult, setSearchResult] = useState([]);
    //kiểm tra có hiện kết quả tìm kiếm hay không
    const [showResult, setShowResult] = useState(false);
    //Loading
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        //setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        // setSearchResult(res.data);
        // setLoading(false);

        fetchApi();
    }, [debouncedValue]);

    //Clear kết quả trong ô tìm kiếm
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    //Xử lí ẩn kết quả nếu blur ra ngoài ô search
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ') /* !searchValue.trim() và không có giá trị */) {
            return;
        }
        setSearchValue(searchValue);
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
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
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
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
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
