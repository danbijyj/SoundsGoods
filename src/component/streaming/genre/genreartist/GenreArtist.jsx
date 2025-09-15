import GenreArtistItem from './GenreArtistItem';
import './style.scss';


const GenreArtist = ({ data }) => {

const GenreArtist = () => {
    const itemCount = 5;

    return (
        <section id="genre-artist">
            <h2>{data.genre} 대표 아티스트</h2>
            <div className="genre-artist-list">

                {data.singer.map((item, index) => (
                    <GenreArtistItem key={index} item={item} />
                ))}

                {/* <GenreArtistItem />
                <GenreArtistItem />
                <GenreArtistItem />
                <GenreArtistItem /> */}

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
