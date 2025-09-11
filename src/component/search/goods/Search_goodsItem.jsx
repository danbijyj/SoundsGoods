import React from 'react';

import './style.scss';
const Search_goodsItem = () => {
    return (
        <div className="GoodsItem">
            <img src="https://placehold.co/230x300" alt="" />
            <div className="heartbox">
                <img src="/public/images/icons/heart.png" alt="" />
            </div>
            <div className="GoodsInfo">
                <div className="GoodsPrice">
                    <h2>지드래곤 위버멘쉬 공식 응원봉</h2> <p>₩ 80,000</p>
                </div>
            </div>
        </div>
    );
};

export default Search_goodsItem;
