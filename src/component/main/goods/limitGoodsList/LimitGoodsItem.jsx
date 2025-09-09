import React from 'react';
import { IoTodayOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { useGoodsStore } from '../../../../store';
const LimitGoodsItem = ({ item }) => {
    const { title, price, release, id, imageM, count, like } = item;
    const today = new Date();
    const releaseData = new Date(release.replace(/-/g, '/'));
    const diffTime = releaseData - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const { isLike } = useGoodsStore();
    return (
        <li>
            <div className="goods_pic">
                <img src={imageM} alt="" />
                <div className="bottom_text">
                    <strong>{title}</strong>
                    <span>₩{price.toString()}</span>
                </div>
                <p className="release_text">
                    <i>
                        <IoTodayOutline />
                    </i>
                    D-{diffDays}
                </p>
                <p className="like_count" onClick={() => isLike(id)}>
                    {like ? (
                        <i style={{ color: '#ff0000' }}>
                            <FaHeart />
                        </i>
                    ) : (
                        <i style={{ color: '#fff' }}>
                            <FaRegHeart />
                        </i>
                    )}
                    {count}
                </p>
            </div>
        </li>
    );
};

export default LimitGoodsItem;
