import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
const GenreCategory = ({ allGenres, selectedGenre, onSelect }) => {
    const navigate = useNavigate();
    return (
        <section id="genre-category">
            <h2>
                장르별 음악
                <Link to="">
                    <img src="/images/streaming/more.png" alt="" />
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
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default GenreCategory;
