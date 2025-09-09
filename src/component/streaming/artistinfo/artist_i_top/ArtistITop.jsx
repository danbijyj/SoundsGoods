import './style.scss';
import ArtistITopIntro from './artist_i_top_intro/ArtistITopIntro';
import ArtistITopMusic from './artist_i_top_music/ArtistITopMusic';

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
