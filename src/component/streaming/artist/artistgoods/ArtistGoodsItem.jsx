import './style.scss';

const ArtistGoodsItem = () => {
    return (
        <div className="artist-goods-item">
            <div className="goods-img">
                <img src="../../../../../public/images/streaming/goods.png" alt="" />
                <p>
                    <img src="../../../../../public/images/streaming/goods_heart.png" alt="" />
                </p>
            </div>
            <div className="artist-goods-text">
                <h3>Official Light Stick Ver.3 10th Anniv. Keyring</h3>
                <h4>₩ 10,000</h4>
            </div>
        </div>
    );
};

export default ArtistGoodsItem;
