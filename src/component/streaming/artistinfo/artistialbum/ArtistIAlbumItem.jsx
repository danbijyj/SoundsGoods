import './style.scss';

const ArtistIAlbumItem = () => {
    return (
        <div className="artist-i-album-item">
            <img
                src="../../../../../public/images/streaming/album.png"
                alt=""
            />
            <div className="album-item-text">
                <h3>ALBUM NAME ALBUM NAME</h3>
                <h4>Artist Name Artist Name</h4>
                <p>2025.09.02</p>
            </div>
        </div>
    );
};

export default ArtistIAlbumItem;
