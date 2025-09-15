import './style.scss';
import { Link, useNavigate } from 'react-router-dom';

const GenreCategory = ({ allGenres, selectedGenre, onSelect }) => {
    const navigate = useNavigate();


const GenreCategory = () => {
    const genres = [
        { name: 'DANCE', img: '/images/streaming/genre_dance_s.jpg' },
        { name: 'JAZZ', img: '/images/streaming/genre_jazz_s.jpg' },
        { name: 'ROCK', img: '/images/streaming/genre_rock_s.jpg' },
        { name: 'BALLAD', img: '/images/streaming/genre_ballad_s.jpg' },
        { name: 'POP', img: '/images/streaming/genre_pop_s.jpg' },
        { name: 'HIPHOP', img: '/images/streaming/genre_hiphop_s.jpg' },
        { name: 'OST', img: '/images/streaming/genre_ost_s.jpg' },
        { name: 'INDIE', img: '/images/streaming/genre_indie_s.jpg' },
    ];

    return (
        <section id="genre-category">
            <h2>
                장르별 음악
                <Link to="">
                    <img src="/images/streaming/more.png" alt="더보기" />
                </Link>
            </h2>
            <ul className="genre-sub">

                {allGenres?.map((item, index) => (
                    <li key={index}>
                        <div
                            className="genre-sub-img"
                            onClick={() => {
                                onSelect(item);
                                navigate(`/streaming/genre/${item.genre}`, { state: item });
                            }}
                        >
                            <img src={item.genreimg} alt={item.genre} />
                            <span>{item.genre}</span>
                        </div>
                        <p>{item.genre}</p>

                {genres.map((genre) => (
                    <li key={genre.name}>
                        <div className="genre-sub-img">
                            <img src={genre.img} alt={genre.name} />
                            <span>{genre.name}</span>
                        </div>
                        <p>{genre.name}</p>

                    </li>
                ))}
            </ul>
        </section>
    );
};

export default GenreCategory;
