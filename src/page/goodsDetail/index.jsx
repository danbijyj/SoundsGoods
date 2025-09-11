import React from 'react';
import { useParams } from 'react-router-dom';
import { useGoodsStore } from '../../store';
import './style.scss';
import GoodsCart from '../../component/goodsDetail/goodsCart/GoodsCart';
const GoodsDetail = () => {
    const { goodsID } = useParams();
    const goods = useGoodsStore((state) => state.goods);
    const data = goods.find((item) => item.id === Number(goodsID));
    const {
        id,
        artist,
        title,
        category,
        price,
        release,
        cpn,
        imageM,
        imgaeS,
        remain,
        quantity,
        like,
        modal,
        chk,
        bookmark,
        count,
    } = data;
    return (
        <div id="goods_detail">
            <div className="inner">
                <GoodsCart data={data} />
            </div>
        </div>
    );
};

export default GoodsDetail;
