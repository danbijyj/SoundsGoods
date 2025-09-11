import RecArtistItem from './RecArtistItem';
import './style.scss';
import { Link } from 'react-router-dom';

const RecArtist = () => {
    return (
        <section id="rec-artist">
            <div>
                <h2>
                    추천 아티스트
                    <Link to="">
                        <img src="/images/streaming/more.png" alt="" />
                    </Link>
                </h2>
            </div>
            <ul className="rec-artist-list">
                <RecArtistItem />
                <RecArtistItem />
                <RecArtistItem />
                <RecArtistItem />
                <RecArtistItem />
                <RecArtistItem />
                <RecArtistItem />
                <RecArtistItem />
            </ul>
        </section>
    );
};

export default RecArtist;
