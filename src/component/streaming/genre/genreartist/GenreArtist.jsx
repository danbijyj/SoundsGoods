import GenreArtistItem from './GenreArtistItem';
import './style.scss';

const GenreArtist = () => {
    const itemCount = 5;
    return (
        <section id="genre-artist">
            <h2>DANCE 대표 아티스트</h2>
            <div className="genre-artist-list">
                {Array(itemCount)
                    .fill(0)
                    .map((_, i) => (
                        <GenreArtistItem key={i} />
                    ))}
            </div>
        </section>
    );
};

export default GenreArtist;
