import React from 'react';
import Search_allbumItem from './Search_allbumItem';
import '../bottom/style.scss';
const Search_allbumList = () => {
    return (
        <div className="allbumList">
            <div className="allbumTitle">
                <h2>
                    앨범<span>28</span>
                    <span>건</span>
                </h2>
                <h3>더보기</h3>
            </div>
            <div className="allbum">
                <Search_allbumItem />
                <Search_allbumItem />
                <Search_allbumItem />
                <Search_allbumItem />
                <Search_allbumItem />
                <Search_allbumItem />
            </div>
        </div>
    );
};

export default Search_allbumList;
