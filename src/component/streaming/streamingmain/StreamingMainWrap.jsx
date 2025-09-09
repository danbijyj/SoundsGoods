import Con1Latest from './Con1Latest';
import Con2Top100 from './Con2Top100';
import Con3Artist from './Con3Artist';
import Con4Genre from './Con4Genre';
import Con5Newmv from './Con5Newmv';
import './style.scss';

const StreamingMainWrap = () => {
    return (
        <section id="streaming-wrap">
            <div className="video-visual">
                MUSIC<span>Streaming</span>
            </div>
            <Con1Latest />
            <Con2Top100 />
            <Con3Artist />
            <Con4Genre />
            <Con5Newmv />
        </section>
    );
};

export default StreamingMainWrap;
