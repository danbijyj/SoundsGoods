import GenreArtist from './genreartist/GenreArtist';
import GenreCategory from './genrecategory/GenreCategory';
import GenreImg from './genreimg/GenreImg';
import GenreMusic from './genremusic/GenreMusic';
import './style.scss';

const GenreWrap = () => {
    return (
        <section id="genre-wrap">
            <div className="genre-img">
                <GenreImg />
            </div>
            <div className="genre_con">
                <GenreCategory />
                <GenreArtist />
                <GenreMusic />
            </div>
        </section>
    );
};

export default GenreWrap;
