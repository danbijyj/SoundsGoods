import RecArtistItem from './RecArtistItem';
import './style.scss';
import { Link } from 'react-router-dom';

const RecArtist = () => {
    const itemCount = 8;
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
                {Array(itemCount)
                    .fill(0)
                    .map((_, i) => (
                        <RecArtistItem key={i} />
                    ))}
            </ul>
        </section>
    );
};

export default RecArtist;
