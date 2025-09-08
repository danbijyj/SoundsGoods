import GenreWrap from '../../../component/streaming/genre/GenreWrap';
import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import './style.scss';

const Genre = () => {
    return (
        <div id="genre">
            <StreamingMenu />
            <GenreWrap />
        </div>
    );
};

export default Genre;
