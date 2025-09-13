import React from 'react';
import { GoPlus } from 'react-icons/go';
import { LuMinus } from 'react-icons/lu';
import { IoIosClose } from 'react-icons/io';
const CartItem = ({ item }) => {
    const {
        id,
        artist,
        title,
        category,
        price,
        release,
        cpn,
        imageM,
        imageS,
        remain,
        quantity,
        like,
        modal,
        chk,
        bookmark,
        count,
    } = item;
    return (
        <li>
            <div className="cart_chk">
                <input type="checkbox" name={`chk${id}`} id={`chk${id}`} />
                <label htmlFor={`chk${id}`}></label>
            </div>
            {/* cark_chk */}
            <div className="item_list">
                <div className="pic">
                    <img src={imageM} alt="" />
                </div>
                <div className="list_text">
                    <strong>{title}</strong>
                    <p className="mini_con">
                        <span>남은수량</span>
                        <span>{remain}</span>
                    </p>
                    <p className="limit_item">예약 판매 9/5 발송 예정</p>
                    <div className="quantity_count">
                        <button className="down">
                            <i>
                                <LuMinus />
                            </i>
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button className="up">
                            <i>
                                <GoPlus />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            {/* item_list */}
            <p className="price_close">
                <button>
                    <i>
                        <IoIosClose />
                    </i>
                </button>
                <strong>₩ {price.toLocaleString()}</strong>
            </p>
        </li>
    );
};

export default CartItem;
