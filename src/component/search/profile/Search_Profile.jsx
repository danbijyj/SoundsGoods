import React from 'react';
import './style.scss';

const Search_Profile = ({ data, data1 }) => {
    if (!data || data.length === 0) {
        return <div className="profile-box">검색된 아티스트가 없습니다.</div>;
    }

    const profile = data[0];
    const pic = data1[0];
    return (
        <div className="profile-box">
            <div className="imgbox">
                <img src={pic.artistimg || 'https://placehold.co/300x300'} alt={profile.artist} />
            </div>
            <div className="textbox">
                <h2>{profile.artist || pic.artist}</h2>
                <div className="profile-info">
                    <div className="profile-info1">
                        <h3>생년월일</h3>
                        <h3>데뷔</h3>
                        <h3>활동유형</h3>
                        <h3>활동장르</h3>
                        <h3>소속사</h3>
                    </div>
                    <div className="profile-info2">
                        <h3>{profile.birth || '정보없음'}</h3>
                        <h3>{profile.debut || '정보없음'}</h3>
                        <h3>{profile.type || '정보없음'}</h3>
                        <h3>{profile.genre || '정보없음'}</h3>
                        <h3>{profile.cpn || '정보없음'}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search_Profile;
