import React from 'react';

const LimitGoodsItem = ({ item }) => {
    const { title, price, release, id, imageM } = item;
    const today = new Date();
    const releaseData = new Date(release);
    const diffTime = releaseData - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <li>
            <div className="goods_pic">
                <img src={imageM} alt="" />
                <div className="bottom_text">
                    <strong>{title}</strong>
                    <span>₩{price.toString()}</span>
                </div>
            </div>
        </li>
    );
};

export default LimitGoodsItem;
