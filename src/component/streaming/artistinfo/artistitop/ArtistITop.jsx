import './style.scss';
import ArtistITopIntro from './artistitop_intro/ArtistITopIntro';
import ArtistITopMusic from './artistitop_music/ArtistITopMusic';

const ArtistITop = () => {
    return (
        <section id="artist-i-top">
            <div className="artist-i-top-left">
                <ArtistITopIntro />
            </div>
            <div className="artist-i-top-right">
                <ArtistITopMusic />
            </div>
        </section>
    );
};

export default ArtistITop;
