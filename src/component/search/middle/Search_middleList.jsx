import React from 'react';
import Search_middleItem from './Search_middleItem';

const Search_middleList = () => {
    return (
        <div className="listTable">
            <div className="listtext">
                <h2>곡명</h2>
                <h3>아티스트명</h3>
                <h4>재생시간</h4>
                <h5>발매일</h5>
                <div className="list">
                    <p>재생</p>
                    <p>좋아요</p>
                    <p>찜하기</p>
                </div>
            </div>
            <Search_middleItem />
        </div>
    );
};

export default Search_middleList;
