import './style.scss';
import ArtistITopIntro from './artistitopintro/ArtistITopIntro';
import ArtistITopMusic from './artistitopmusic/ArtistITopMusic';

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
