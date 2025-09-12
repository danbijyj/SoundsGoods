import React from 'react';

const ArtistIGoodsItem = ({ item }) => {
    const formattedPrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <div className="artist-i-goods-item">
            <div className="artist-i-goods-img">
                <img src={item.imageM} />
                <p>
                    <img src="../../../../../public/images/streaming/goods_heart.png" alt="" />
                </p>
            </div>
            <div className="artist-i-goods-text">
                <h3>{item.title}</h3>
                <h4>{formattedPrice} 원</h4>
            </div>
        </div>
    );
};

export default ArtistIGoodsItem;
