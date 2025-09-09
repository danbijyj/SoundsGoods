import './style.scss';

const ArtistIVideoItem = () => {
    return (
        <div className="artist-i-video-item">
            <iframe
                src="https://www.youtube.com/embed/XMs2CIiqRDI?controls=0&modestbranding=1&rel=0"
                title="THE BOYZ(더보이즈) 'THRILL RIDE' MV"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="video-item-text">
                <h3>ALBUM NAME ALBUM NAME</h3>
                <h4>Artist Name Artist Name</h4>
                <p>2025.09.02</p>
            </div>
        </div>
    );
};

export default ArtistIVideoItem;
