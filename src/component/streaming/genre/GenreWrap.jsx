import GenreCategory from './genrecategory/GenreCategory';
import GenreImg from './genreimg/GenreImg';
import './style.scss';

const GenreWrap = () => {
    return (
        <section id="genre-wrap">
            <div className="genre-img">
                <GenreImg />
            </div>
            <div className="genre_con">
                <GenreCategory />
            </div>
        </section>
    );
};

export default GenreWrap;
