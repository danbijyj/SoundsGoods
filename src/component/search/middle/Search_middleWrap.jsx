import React from 'react';
import Search_middleList from './Search_middleList';

const Search_middleWrap = () => {
    return (
        <div className="search_middle">
            <div className="middle_title">
                <h2>
                    곡 검색결과 <span>136</span>건
                </h2>
                <p>더보기</p>
            </div>{' '}
            <Search_middleList />
        </div>
    );
};

export default Search_middleWrap;
