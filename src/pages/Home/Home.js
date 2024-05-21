import { useState, useEffect } from 'react';

import Video from '~/components/Video';

function Home() {
    const [videos, setVideos] = useState([]);
    const [muted, setMuted] = useState(true);
    const [volume, setVolume] = useState(0);
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
            .then((response) => response.json())
            .then((response) => setVideos(response.data))
            .catch((err) => console.error(err));
    }, []);

    const handleVolume = (e) => {
        setVolume(e.target.value / 100);
        // videoRef.current.volume = parseFloat(volume.toFixed(1));
        parseFloat(volume.toFixed(1)) === 0 ? setMuted(true) : setMuted(false);
    };

    const handleMute = () => {
        if (muted) {
            setVolume(0.45);
            // videoRef.current.volume = 0.45;
            setMuted(false);
        } else {
            setVolume(0);
            // videoRef.current.volume = 0;
            setMuted(true);
        }
    };

    return (
        <div>
            {videos.map((video, key) => (
                <Video
                    data={video}
                    handleVolume={handleVolume}
                    handleMute={handleMute}
                    volume={volume}
                    muted={muted}
                ></Video>
            ))}
        </div>
    );
}

export default Home;
