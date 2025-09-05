import React from 'react';

const MainAlbumItem = ({ al }) => {
    const { id, artist, album, artist_img, album_img, isLike } = al;
    return (
        <li>
            <div className="album_pic">
                <img src={album_img} alt={album} />
            </div>
            <div className="artist_pic">
                <div className="pic2">
                    <img src={artist_img} alt={artist} />
                </div>
            </div>
            <p>
                <strong>{album}</strong>
                <span>{artist}</span>
            </p>
        </li>
    );
};

export default MainAlbumItem;
