import './style.scss';

const LatestMusicWrap = () => {
    return (
        <section id="latest-wrap">
            <div className="video-visual">
                <div className="bg-opacity"></div>
                <iframe
                    src="https://www.youtube.com/embed/ekr2nIex040?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=ekr2nIex040"
                    title="dd"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                <div className="video-text">
                    MUSIC<span>Streaming</span>
                </div>
            </div>
            <div>최신음악메인</div>
        </section>
    );
};

export default LatestMusicWrap;
