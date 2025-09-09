import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import ArtistWrap from '../../../component/streaming/artist/ArtistWrap';
import './style.scss';

const Artist = () => {
    return (
        <div id="artist">
            <StreamingMenu />
            <ArtistWrap />
        </div>
    );
};

export default Artist;
