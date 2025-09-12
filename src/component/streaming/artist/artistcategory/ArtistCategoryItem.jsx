import { useNavigate } from 'react-router-dom';
import './style.scss';

const ArtistCategoryItem = ({ item }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/streaming/artistinfo/${item.id}`);
    };

    return (
        <>
            <div className="artist-category-item">
                <img
                    src={item.artist_img || '/images/streaming/artist.png'}
                    alt=""
                    onClick={onClick}
                />
                <h3>{item.artist}</h3>
            </div>

            <li className="artist-category-item">
                <img src="../../../../../public/images/streaming/artist.png" alt="" />
                <h3>블랙핑크</h3>
            </li>
        </>
    );
};

export default ArtistCategoryItem;
