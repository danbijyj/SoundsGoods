import React, { useEffect, useState } from 'react';
import './style.scss';
import Search_allbumList from '../../component/search/bottom/Search_allbumList';
import Search_goodsList from '../../component/search/goods/Search_goodsList';
import Search_popupList from '../../component/search/popup/Search_popupList';
import Search_Profile from '../../component/search/profile/Search_Profile';
import Search_MusicList from '../../component/search/music/Search_MusicList';
import { useParams } from 'react-router-dom';
import musicData from '../../assets/api/musicData';

const Search = () => {
    const { text } = useParams();
    const [data, setData] = useState([]);
    const [artistData, setArtistData] = useState([]);

    useEffect(() => {
        setData(musicData);

        const artists = Array.from(new Set(musicData.map((item) => item.artist)));
        setArtistData(artists.map((artist) => ({ artist })));
    }, []);

    const filterData = data.filter(
        (item) =>
            item.artist.toLowerCase().includes(text.toLowerCase()) ||
            item.title.toLowerCase().includes(text.toLowerCase())
    );

    const artistFilter = artistData.filter((item) =>
        item.artist.toLowerCase().includes(text.toLowerCase())
    );

    return (
        <div className="inner">
            <div className="search">
                <div className="toptext">
                    <h2>'{text}'에 대한 검색결과 입니다.</h2>
                </div>
                <Search_Profile data={artistFilter} data1={filterData} />
                <Search_MusicList data={filterData} />
                <Search_allbumList data={filterData} />
                <Search_goodsList data={filterData} />
                <Search_popupList data={filterData} />
            </div>
        </div>
    );
};

export default Search;
