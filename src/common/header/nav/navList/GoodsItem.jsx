import React from 'react';
import './Goodsstyle.scss';
const GoodsItem = ({ data }) => {
    return (
        <div className="goodsbox">
            <div className="goodsitembox">
                <div className="imgbox">
                    <img src={data.imageM} alt="" />
                </div>
                <div className="goodTextbox">
                    <h2>{data.artist}</h2>
                    <h3>{data.title}</h3>
                    <h4>{data.price}원</h4>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;
