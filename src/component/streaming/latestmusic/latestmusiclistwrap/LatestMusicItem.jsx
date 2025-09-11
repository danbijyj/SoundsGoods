import './style.scss';

const LatestMusicItem = () => {
    return (
        <tr>
            <td className="col-album-td">
                <img src="/images/streaming/album.png" alt="" />
            </td>
            <td className="col-title-td">
                SUPERNATURAL
                <p>Editorial picks of the best songs from 2022.</p>
            </td>
            <td className="col-artist-td">Oasis</td>
            <td className="col-time-td">3:23</td>
            <td className="col-release-td">25.09.04</td>
            <td className="col-play-td icon">
                <img src="/images/streaming/icon_play.png" alt="" />
            </td>
            <td className="col-like-td icon">
                <img src="/images/streaming/icon_heart.png" alt="" />
            </td>
            <td className="col-fav-td icon">
                <img src="/images/streaming/icon_star.png" alt="" />
            </td>
        </tr>
    );
};

export default LatestMusicItem;
