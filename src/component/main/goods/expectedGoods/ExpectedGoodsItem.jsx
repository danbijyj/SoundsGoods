import React from 'react';
import { useGoodsStore } from '../../../../store';
import { IoTodayOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
const ExpectedGoodsItem = ({ item }) => {
    const { title, price, release, id, imageM, count, like } = item;
    const { isLike2 } = useGoodsStore();
    return (
        <li>
            <div className="goods_pic">
                <img src={imageM} alt="" />
                <div className="bottom_text">
                    <strong>{title}</strong>
                    <span>₩{price.toString()}</span>
                </div>
                <p className="like_count" onClick={() => isLike2(id)}>
                    {like ? (
                        <i style={{ color: '#ff0000' }}>
                            <FaHeart />
                        </i>
                    ) : (
                        <i style={{ color: '#fff' }}>
                            <FaRegHeart />
                        </i>
                    )}
                </p>
            </div>
        </li>
    );
};

export default ExpectedGoodsItem;
