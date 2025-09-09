import './style.scss';
import { Link } from 'react-router-dom';

const GenreCategory = () => {
    return (
        <section id="genre-category">
            <h2>
                장르별 음악
                <Link to="">
                    <img src="../../../../../public/images/streaming/more.png" alt="" />
                </Link>
            </h2>
            <ul className="genre-sub">
                <li>
                    <img src="../../../../../public/images/streaming/genre_dance_s.jpg" alt="" />
                    <p>DANCE</p>
                </li>
                <li>
                    <img src="../../../../../public/images/streaming/genre_jazz_s.jpg" alt="" />
                    <p>JAZZ</p>
                </li>
                <li>
                    <img src="../../../../../public/images/streaming/genre_rock_s.jpg" alt="" />
                    <p>ROCK</p>
                </li>
                <li>
                    <img src="/images/streaming/genre_ballad_s.jpg" alt="" />
                    <p>BALLAD</p>
                </li>
                <li>
                    <img src="../../../../../public/images/streaming/genre_pop_s.jpg" alt="" />
                    <p>POP</p>
                </li>
                <li>
                    <img src="../../../../../public/images/streaming/genre_hiphop_s.jpg" alt="" />
                    <p>HIPHOP</p>
                </li>
                <li>
                    <img src="../../../../../public/images/streaming/genre_ost_s.jpg" alt="" />
                    <p>OST</p>
                </li>
                <li>
                    <img src="../../../../../public/images/streaming/genre_indie_s.jpg" alt="" />
                    <p>INDIE</p>
                </li>
            </ul>
        </section>
    );
};

export default GenreCategory;
