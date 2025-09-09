import ArtistInfoWrap from '../../../component/streaming/artistinfo/ArtistInfoWrap';
import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import './style.scss';

const ArtistInfo = () => {
    return (
        <div id="artistinfo">
            <StreamingMenu />
            <ArtistInfoWrap />
        </div>
    );
};

export default ArtistInfo;
