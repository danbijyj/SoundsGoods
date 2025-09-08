import ArtistGoodsItem from './ArtistGoodsItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistGoods = () => {
    return (
        <section id="artist-goods">
            <div>
                <h2>
                    새로 나온 아티스트 굿즈
                    <Link to="">
                        <img
                            src="../../../../../public/images/streaming/more_color.png"
                            alt=""
                        />
                    </Link>
                </h2>
            </div>
            <div className="artist-goods-list">
                <ArtistGoodsItem />
                <ArtistGoodsItem />
                <ArtistGoodsItem />
                <ArtistGoodsItem />
                <ArtistGoodsItem />
            </div>
        </section>
    );
};

export default ArtistGoods;
