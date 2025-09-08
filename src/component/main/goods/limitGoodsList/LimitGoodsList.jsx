import React from 'react';
import { useGoodsStore } from '../../../../store';
import LimitGoodsItem from './LimitGoodsItem';
import './style.scss';
const LimitGoodsList = () => {
    const goods = useGoodsStore((state) => state.goods);
    const data = goods.slice(0, 5);
    const limit = goods.sort(() => Math.random() - 0.5);
    return (
        <ul className="goods_list_limit">
            {limit.map((item) => (
                <LimitGoodsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default LimitGoodsList;
