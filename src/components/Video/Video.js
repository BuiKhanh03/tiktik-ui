import { useRef, useState, useContext } from 'react';
import classNames from 'classnames/bind';

import Image from '../Image';
import Button from '../Button';
import config from '~/config';
import { MusicIcon, PlayIcon, PauseIcon, VolumeIcon, LoveIcon, CommentIcon, ShareIcon, FlagIcon } from '../Icons';
import { ModalContext } from '~/components/ModelContextProvider';

import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({ data, className }) {
    const videoRef = useRef();
    const login = useContext(ModalContext);

    const [playing, setPlaying] = useState(false);

    const togglePlayVideo = () => {
        if (!playing) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const handleVolume = (e) => {
        videoRef.current.volume = e.target.value / 100;
    };

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
                            ></video>
                            <div className={cx('video-control')} onClick={togglePlayVideo}>
                                {playing ? <PauseIcon /> : <PlayIcon />}
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
                                    ></input>
                                </div>
                                <VolumeIcon></VolumeIcon>
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
