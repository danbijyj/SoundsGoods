import { useState } from 'react';

const Con5Newmv = () => {
    const [isPlaying, setIsPlaying] = useState(false); // 기본: 정지 상태
    const handleClick = () => {
        setIsPlaying((prev) => !prev); // true/false 토글
    };

    return (
        <div className="con-inner">
            <h3>
                새로 올라온 Music Video
                <img src="/images/streaming/more.png" alt="" />
            </h3>
            <div className="mv-visual-wrap">
                <div className="video">
                    <button className="play-btn" onClick={handleClick}>
                        <img
                            src={
                                isPlaying
                                    ? '/images/streaming/mv-pause-icon.png' // 재생 중 → pause 아이콘
                                    : '/images/streaming/mv-play-icon.png' // 정지 상태 → play 아이콘
                            }
                            alt={isPlaying ? 'Pause' : 'Play'}
                            style={{ cursor: 'pointer' }}
                        />
                    </button>
                    <iframe
                        width="710"
                        height="400"
                        src="https://www.youtube.com/embed/CgCVZdcKcqY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=CgCVZdcKcqY"
                        title="dd"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="text-wrap">
                    <strong>Album Name</strong>
                    <em>
                        Artist Name<span>2025.09.02</span>
                    </em>
                    <p>
                        텍스트설명 텍스트설명 텍스트설명 텍스트설명 텍스트설명 텍스트설명 텍스트설명
                        텍스트설명 텍스트설명 텍스트설명 텍스트설명
                    </p>
                </div>
            </div>
            <ul className="newmv-wrap">
                <li>
                    <div className="video-wrap">
                        <video width="444" height="250" id="video1">
                            <source src="/videos/famous.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <button
                        className="play-btn"
                        onClick={() => document.getElementById('video1').play()}
                    >
                        <img src="/images/streaming/mv-play-icon.png" alt="Play" />
                    </button>
                    <h4>Album Name</h4>
                    <strong>Artist Name</strong>
                    <p>2025.09.08</p>
                </li>

                <li>
                    <div className="video-wrap">
                        <video width="444" height="250" id="video2">
                            <source src="/videos/epikhigh.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <button
                        className="play-btn"
                        onClick={() => document.getElementById('video2').play()}
                    >
                        <img src="/images/streaming/mv-play-icon.png" alt="Play" />
                    </button>
                    <h4>Album Name</h4>
                    <strong>Artist Name</strong>
                    <p>2025.09.08</p>
                </li>

                <li>
                    <div className="video-wrap">
                        <video width="444" height="250" id="video3">
                            <source src="/videos/neverendingstory.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <button
                        className="play-btn"
                        onClick={() => document.getElementById('video3').play()}
                    >
                        <img src="/images/streaming/mv-play-icon.png" alt="Play" />
                    </button>
                    <h4>Album Name</h4>
                    <strong>Artist Name</strong>
                    <p>2025.09.08</p>
                </li>
            </ul>
        </div>
    );
};

export default Con5Newmv;
