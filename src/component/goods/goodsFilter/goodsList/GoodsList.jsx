import React, { useEffect } from 'react';
import { useGoodsStore } from '../../../../store';
import GoodsItem from './GoodsItem';
import './style.scss';

const GoodsList = () => {
    const goods = useGoodsStore((state) => state.goods);
    useEffect(() => {
        const ids = goods.map((g) => g.id);
        const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
        if (dupes.length) {
            console.error('중복 id 발견:', [...new Set(dupes)]);
            console.table(goods.filter((g) => dupes.includes(g.id)));
        }
    }, [goods]);
    return (
        <ul className="goods_page_goods_list">
            {goods.map((goods) => (
                <GoodsItem key={goods.id} goods={goods} />
            ))}
        </ul>
    );
};

export default GoodsList;
