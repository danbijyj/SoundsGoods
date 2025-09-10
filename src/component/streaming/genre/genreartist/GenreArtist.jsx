import GenreArtistItem from './GenreArtistItem';
import './style.scss';

const GenreArtist = () => {
    return (
        <section id="genre-artist">
            <h2>DANCE 대표 아티스트</h2>
            <div className="genre-artist-list">
                <GenreArtistItem />
                <GenreArtistItem />
                <GenreArtistItem />
                <GenreArtistItem />
                <GenreArtistItem />
            </div>
        </section>
    );
};

export default GenreArtist;
