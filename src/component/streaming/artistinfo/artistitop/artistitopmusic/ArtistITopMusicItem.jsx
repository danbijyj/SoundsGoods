import './style.scss';

const ArtistITopMusicItem = () => {
    return (
        <tr>
            <td className="artist-music-1">
                <img src="../../../../../public/images/streaming/album.png" alt="" />
            </td>
            <td className="artist-music-2">
                SUPERNATURAL
                <p>Editorial picks of the best songs from 2022.</p>
            </td>
            <td className="artist-music-3">3:23</td>
            <td className="artist-music-4 icon">
                <img src="../../../../../public/images/streaming/icon_play.png" alt="" />
            </td>
            <td className="artist-music-5 icon">
                <img src="../../../../../public/images/streaming/icon_heart.png" alt="" />
            </td>
            <td className="artist-music-6 icon">
                <img src="../../../../../public/images/streaming/icon_star.png" alt="" />
            </td>
        </tr>
    );
};

export default ArtistITopMusicItem;
