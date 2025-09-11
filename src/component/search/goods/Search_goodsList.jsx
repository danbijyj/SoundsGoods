import React from 'react';
import Search_goodsItem from './Search_goodsItem';
import './style.scss';
const Search_goodsList = () => {
    return (
        <div className="goodsList">
            <div className="goodsTitle">
                <h2>
                    굿즈 검색결과<span>4,533</span>
                    <span>건</span>
                </h2>
                <h3>더보기</h3>
            </div>
            <div className="goods">
                <Search_goodsItem />
                <Search_goodsItem />
                <Search_goodsItem />
                <Search_goodsItem />
                <Search_goodsItem />
            </div>
        </div>
    );
};

export default Search_goodsList;
