import React from 'react';
import '../popup/style.scss';
import Search_popupItem from './Search_popupItem';

const Search_popupList = () => {
    return (
        <div className="popupList">
            <div className="popupTitle">
                <h2>
                    팝업스토어<span>4</span>
                    <span>건</span>
                </h2>
                <h3>더보기</h3>
            </div>
            <div className="popup">
                <Search_popupItem />
                <Search_popupItem />
                <Search_popupItem />
                <Search_popupItem />
            </div>
        </div>
    );
};

export default Search_popupList;
