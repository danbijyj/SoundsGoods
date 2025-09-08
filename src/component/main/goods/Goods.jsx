import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import LimitGoodsList from './limitGoodsList/LimitGoodsList';
const Goods = () => {
    return (
        <section id="goods">
            <div className="inner">
                <h2>더 다양한 다양한 굿즈를 SOUNDSGOODS에서</h2>
                <ul className="goods_category_list">
                    <li>
                        <Link>
                            <div>
                                <img src="/images/main/cd.jpg" alt="" />
                            </div>
                            <span>CD / DVD</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src="/images/main/md.jpg" alt="" />
                            </div>
                            <span>MD</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src="/images/main/book.jpg" alt="" />
                            </div>
                            <span>BOOK</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src="/images/main/clothes.png" alt="" />
                            </div>
                            <span>CLOTHES</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src="/images/main/etc.jpg" alt="" />
                            </div>
                            <span>ETC</span>
                        </Link>
                    </li>
                </ul>
                <LimitGoodsList />
            </div>
        </section>
    );
};

export default Goods;
