import { useEffect, useState } from 'react';
import GenreArtist from './genreartist/GenreArtist';
import GenreCategory from './genrecategory/GenreCategory';
import GenreCategoryMobile from './genrecategorymobile/GenreCategoryMobile';
import GenreImg from './genreimg/GenreImg';
import GenreMusic from './genremusic/GenreMusic';
import './style.scss';
import GenreArtistMobile from './genreartistmobile/GenreArtistMobile';


const GenreWrap = ({ data, allGenres, onSelect }) => {

const GenreWrap = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="genre-wrap">
            <div className="genre-img">
                <GenreImg data={data} />
            </div>
            <div className="genre_con">

                <GenreCategory allGenres={allGenres} selectedGenre={data} onSelect={onSelect} />
                <GenreArtist data={data} />
                <GenreMusic data={data} />

                {width > 1024 ? <GenreCategory /> : <GenreCategoryMobile />}
                {width > 1024 ? <GenreArtist /> : <GenreArtistMobile />}
                <GenreMusic />

            </div>
        </section>
    );
};

export default GenreWrap;
