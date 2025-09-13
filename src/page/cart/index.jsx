import React from 'react';
import ShoppingCart from '../../component/cart/ShoppingCart';
import './style.scss';
import WishList from '../../component/wishList/WishList';
const Cart = () => {
    return (
        <div id="cart">
            <div className="inner">
                <h2 className="cart_co cart_title">장바구니</h2>
                <ShoppingCart />
                <h2 className="cart_co wish_goods_title">추천 굿즈</h2>
                <WishList />
            </div>
        </div>
    );
};

export default Cart;
