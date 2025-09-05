import MainAlbumList from './albumList/MainAlbumList';
import './style.scss';

const VideoArtist = () => {
    return (
        <section id="video_artist">
            <div className="inner">
                <h2>지금 뜨고있는 Video</h2>
                <MainAlbumList />
            </div>
        </section>
    );
};

export default VideoArtist;
