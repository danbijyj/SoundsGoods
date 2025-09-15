import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jazz_401_450 from '../../../assets/api/musicComponents/jazz_401_450';
import genre from '../../../assets/api/genre';
const Con4Genre = ({ allGenres, selectedGenre, onSelect }) => {
    const navigate = useNavigate();
    return (
        <div className="con-inner">
            <h3>
                장르별 음악
                <Link to="genre">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h3>
            <ul className="genre-wrap">

                {allGenres.map((item, index) => (
                    <li key={index}>
                        <div
                            className="genre-sub-img"
                            onClick={() => {
                                onSelect(item);
                                navigate(`/streaming/genre/${item.genre}`), { state: item };
                            }}
                        >
                            <img src={item.genreimg} alt={item.genre} />
                            <span>{item.genre}</span>
                        </div>
                        <p>{item.genre}</p>
                    </li>
                ))}

                <Link to="genre/dance">
                    <li>
                        <div className="genre-sub-img">
                            <img src="/images/streaming/genre_dance_s.jpg" alt="" />
                            <span>DANCE</span>
                        </div>
                        <p>DANCE</p>
                    </li>
                </Link>
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
                        <img src="/images/streaming/genre_ballad_s.jpg" alt="" />
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
                        <img src="/images/streaming/genre_hiphop_s.jpg" alt="" />
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
        </div>
    );
};

export default Con4Genre;
