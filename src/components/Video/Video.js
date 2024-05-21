import { useRef, useState, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';

import Image from '../Image';
import Button from '../Button';
import config from '~/config';
import { MutedIcon } from '~/components/Icons';
import { ModalContext } from '~/components/ModalContextProvider';
import { MusicIcon, PlayIcon, PauseIcon, VolumeIcon, LoveIcon, CommentIcon, ShareIcon } from '../Icons';

import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({ data, handleVolume, handleMute, volume, muted }) {
    const login = useContext(ModalContext);
    const [isPlaying, setIsPlaying] = useState(true);

    const videoRef = useRef();

    console.log(muted);
    console.log(volume);

    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (isPlaying === true) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayVideo = () => {
        if (isPlaying === false) {
            playVideo();
        } else {
            pauseVideo();
        }
    };

    function elementInViewport() {
        var bounding = videoRef.current.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <=
                (window.innerWidth /*Get width of browser*/ ||
                    document.documentElement.clientWidth) /*Get width of html*/ &&
            bounding.bottom <=
                (window.innerHeight /*Get height of browser*/ ||
                    document.documentElement.clientHeight) /*Get Height of html*/
        ) {
            playVideo();
        } else {
            pauseVideo();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', elementInViewport);
        //clean up
        return () => window.removeEventListener('scroll', elementInViewport);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain')}>
                <div className={cx('header')}>
                    <Image
                        className={cx('header-img')}
                        to={config.routes.profile}
                        src={data?.user.avatar}
                        alt={data?.user.avatar}
                    ></Image>
                </div>
                <div className={cx('body')}>
                    <div className={cx('body-header')}>
                        <div className={cx('body-subHeader')}>
                            <div className={cx('body-headerInfo')}>
                                <p className={cx('body-headerNickname')}>
                                    <strong>{data?.user.nickname}</strong>
                                </p>
                                <p
                                    className={cx('body-headerName')}
                                >{`${data?.user.first_name} ${data?.user.last_name}`}</p>
                            </div>
                            <div className={cx('body-headerDsc')}>
                                <p className={cx('body-headerSubDsc')}>{data?.description}</p>
                                <MusicIcon></MusicIcon>
                            </div>
                        </div>
                        <Button outline className={cx('body-button')} onClick={login.handleShowModel}>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('video')}>
                        <div className={cx('video-card')}>
                            <video
                                style={
                                    data?.meta.video.resolution_x < data?.meta.video.resolution_y
                                        ? { width: '273px' }
                                        : { width: '463px' }
                                }
                                loop
                                className={cx('video-component')}
                                src={data?.file_url}
                                ref={videoRef}
                                volume={volume}
                                autoPlay
                                muted={muted}
                            ></video>
                            <div className={cx('video-control')} onClick={togglePlayVideo}>
                                {isPlaying ? <PauseIcon /> : <PlayIcon />}
                            </div>
                            <div className={cx('video-volume')}>
                                <div className={cx('video-volume-range')}>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        orient="vertical"
                                        onChange={handleVolume}
                                        value={volume * 100}
                                    ></input>
                                </div>
                                <div className={cx('video-volume-icon')} onClick={handleMute}>
                                    {muted ? <MutedIcon /> : <VolumeIcon />}
                                </div>
                            </div>

                            <div className={cx('video-report')}>
                                <FontAwesomeIcon className={cx('video-report-icon')} icon={faFlag}></FontAwesomeIcon>
                                <p className={cx('video-report-header')}>Report</p>
                            </div>
                        </div>

                        <div className={cx('video-action')}>
                            <div className={cx('video-action-item')}>
                                <Button rounded small className={cx('video-action-btn')}>
                                    <LoveIcon className={cx('video-action-icon')}></LoveIcon>
                                </Button>
                                <span className={cx('video-action-number')}>{data?.likes_count}</span>
                            </div>
                            <div className={cx('video-action-item')}>
                                <Button rounded small className={cx('video-action-btn')}>
                                    <CommentIcon className={cx('video-action-icon')}></CommentIcon>
                                </Button>
                                <span className={cx('video-action-number')}>{data?.comments_count}</span>
                            </div>
                            <div className={cx('video-action-item')}>
                                <Button rounded small className={cx('video-action-btn')}>
                                    <ShareIcon className={cx('video-action-icon')}></ShareIcon>
                                </Button>
                                <span className={cx('video-action-number')}>{data?.shares_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
