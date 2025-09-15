import { useState } from 'react';
import './style.scss';
import Top100MusicList from './Top100MusicList';
import top_1_50 from '../../../../assets/api/musicComponents/top_1_50';

const Top100Music = () => {
    const [musicData, setMusicData] = useState(top_1_50);
    const [selectedAll, setSelectedAll] = useState(false);

    const handleSelectAll = () => {
        setSelectedAll((prev) => !prev);
    };

    return (
        <section id="top100-music">
            <h2>인기 차트 TOP 50</h2>
            <div className="top100-music-top">
                <div className="top100-music-btn">
                    <button onClick={handleSelectAll}>
                        {selectedAll ? '전체 해제' : '전체 선택'}
                    </button>
                    <button>전체 재생</button>
                </div>
                <div className="top100-music-sort">
                    <div className="sort-down">정렬</div>
                    <div className="sorting">
                        <ul>
                            <li className="sorting-title">정렬</li>
                            <li>최신순</li>
                            <li>인기순</li>
                            <li>이름순</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Top100MusicList data={musicData} selectedAll={selectedAll} />
        </section>
    );
};
////
export default Top100Music;
