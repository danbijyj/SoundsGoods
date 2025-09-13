import React from 'react';
import { useGoodsStore } from '../../../store';
import CartItem from './CartItem';
import './style.scss';

const CartList = () => {
    const goods = useGoodsStore((state) => state.goods);
    const data = goods.slice(0, 2);
    return (
        <ul className="cart_list">
            {data.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default CartList;
