import './style.scss';
import { Link } from 'react-router-dom';

const GenreCategory = () => {
    return (
        <section id="genre-category">
            <h2>
                장르별 음악
                <Link to="">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h2>
            <ul className="genre-sub">
                <li>
                    <div className="genre-sub-img">
                        <img src="/images/streaming/genre_dance_s.jpg" alt="" />
                        <span>DANCE</span>
                    </div>
                    <p>DANCE</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img src="/images/streaming/genre_jazz_s.jpg" alt="" />
                        <span>JAZZ</span>
                    </div>
                    <p>JAZZ</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img src="/images/streaming/genre_rock_s.jpg" alt="" />
                        <span>ROCK</span>
                    </div>
                    <p>ROCK</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img
                            src="/images/streaming/genre_ballad_s.jpg"
                            alt=""
                        />
                        <span>BALLAD</span>
                    </div>
                    <p>BALLAD</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img src="/images/streaming/genre_pop_s.jpg" alt="" />
                        <span>POP</span>
                    </div>
                    <p>POP</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img
                            src="/images/streaming/genre_hiphop_s.jpg"
                            alt=""
                        />
                        <span>HIPHOP</span>
                    </div>
                    <p>HIPHOP</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img src="/images/streaming/genre_ost_s.jpg" alt="" />
                        <span>OST</span>
                    </div>
                    <p>OST</p>
                </li>
                <li>
                    <div className="genre-sub-img">
                        <img src="/images/streaming/genre_indie_s.jpg" alt="" />
                        <span>INDIE</span>
                    </div>
                    <p>INDIE</p>
                </li>
            </ul>
        </section>
    );
};

export default GenreCategory;
