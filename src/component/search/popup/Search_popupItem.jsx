import React from 'react';
import './style.scss';
const Search_popupItem = () => {
    return (
        <div className="popupItem">
            <img src="https://placehold.co/180x180" alt="" />
            <div className="popupInfo">
                <div className="popuptitle">
                    <h2>
                        G-DRAGON
                        <br />
                        COLDPLAY
                    </h2>
                </div>
                <div className="popupDate">
                    <h3>25. 08. 01 - 25. 09. 30</h3>
                </div>
                <div className="popupListen">
                    <p>서울 더 현대</p>
                </div>
            </div>
        </div>
    );
};

export default Search_popupItem;
