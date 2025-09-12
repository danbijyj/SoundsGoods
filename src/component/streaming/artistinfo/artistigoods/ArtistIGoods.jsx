import ArtistIGoodsItem from './ArtistIGoodsItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistIGoods = ({ data }) => {
    return (
        <section id="artist-i-goods">
            <div>
                <h2>
                    {data.artist}
                    <Link to="">
                        <img src="../../../../../public/images/streaming/more_color.png" alt="" />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-goods-list">
                {data.goods.map((item, index) => (
                    <ArtistIGoodsItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ArtistIGoods;
