import ArtistIGoodsItem from './ArtistIGoodsItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistIGoods = () => {
    return (
        <section id="artist-i-goods">
            <div>
                <h2>
                    더보이즈 (THE BOYZ) 굿즈 예약하기
                    <Link to="">
                        <img
                            src="../../../../../public/images/streaming/more_color.png"
                            alt=""
                        />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-goods-list">
                <ArtistIGoodsItem />
                <ArtistIGoodsItem />
                <ArtistIGoodsItem />
                <ArtistIGoodsItem />
                <ArtistIGoodsItem />
            </div>
        </section>
    );
};

export default ArtistIGoods;
