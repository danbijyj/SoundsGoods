import React from 'react';
import './style.scss';
import Search_Profile from '../../component/search/top/Search_Profile';
import Search_middleWrap from '../../component/search/middle/Search_middleWrap';

const Search = () => {
    return (
        <div className="inner">
            <div className="search">
                <div className="toptext">
                    <h2>'000'에 대한 검색결과 입니다.</h2>
                </div>
                <div className="middletext">
                    <h2>아티스트 검색결과 0건</h2>
                </div>
                <Search_Profile />
                <Search_middleWrap />
            </div>
        </div>
    );
};

export default Search;
