import StreamingMainWrap from '../../component/streaming/streamingmain/StreamingMainWrap';
import StreamingMenu from '../../component/streaming/streamingmenu/StreamingMenu';
import './style.scss';

const Streaming = () => {
    return (
        <div id="streaming">
            <StreamingMenu />
            <StreamingMainWrap />
        </div>
    );
};

export default Streaming;
