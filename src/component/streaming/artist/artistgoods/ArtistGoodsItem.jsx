import { useNavigate } from 'react-router-dom';
import './style.scss';

const ArtistGoodsItem = ({ item }) => {
    const navigate = useNavigate();
    const formattedPrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const onClick = () => {
        navigate(`/goods/:${item.id}`);
    };
    return (
        <div className="artist-goods-item">
            <div className="goods-img" onClick={onClick}>
                <img src={item.imageM} />
                <p>
                    <img src="../../../../../public/images/streaming/goods_heart.png" alt="" />
                </p>
            </div>
            <div className="artist-goods-text">
                <h3>{item.title}</h3>
                <h4>₩ {formattedPrice}</h4>
            </div>
        </div>
    );
};

export default ArtistGoodsItem;
