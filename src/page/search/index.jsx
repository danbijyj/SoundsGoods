import React from 'react';
import './style.scss';
import Search_allbumList from '../../component/search/bottom/Search_allbumList';
import Search_goodsList from '../../component/search/goods/Search_goodsList';
import Search_popupList from '../../component/search/popup/Search_popupList';
import Search_Profile from '../../component/search/profile/Search_Profile';
import Search_MusicList from '../../component/search/music/Search_MusicList';

const Search = () => {
    return (
        <div className="inner">
            <div className="search">
                <div className="toptext">
                    <h2>'000'에 대한 검색결과 입니다.</h2>
                </div>
                <Search_Profile />
                <Search_MusicList />
                <Search_allbumList />
                <Search_goodsList />
                <Search_popupList />
            </div>
        </div>
    );
};

export default Search;
