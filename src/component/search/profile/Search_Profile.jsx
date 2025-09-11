import React from 'react';
import './style.scss';
const Search_Profile = () => {
    return (
        <div className="profile-box">
            <div className="imgbox">
                <img src="https://placehold.co/300x300" alt="" />
            </div>
            <div className="textbox">
                <h2>G-DRAGON</h2>
                <div className="profile-info">
                    <div className="profile-info1">
                        <h3>생년월일</h3>
                        <h3>데뷔</h3>
                        <h3>활동유형</h3>
                        <h3>활동장르</h3>
                        <h3>소속사</h3>
                    </div>
                    <div className="profile-info2">
                        <h3>1998.08.18</h3>
                        <h3>2009.03.18</h3>
                        <h3>활동유형</h3>
                        <h3>댄스/랩/힙합</h3>
                        <h3>갤럭시코퍼레이션</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Search_Profile;
