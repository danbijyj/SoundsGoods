import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import '../bottom/style.scss';
const Search_allbumItem = () => {
    return (
        <div className="allbumItem">
            <img src="https://placehold.co/180x180" alt="" />
            <div className="allbunInfo">
                <div className="allbumtitle">
                    <h2>
                        Übermensch <br />
                        G-DRAGON
                    </h2>
                </div>
                <div className="allbumDate">
                    <h3>
                        25. 02. 25 | <FaRegHeart />
                        48,261
                    </h3>
                </div>
                <div className="allbumListen">
                    <p>앨범 듣기</p>
                </div>
            </div>
        </div>
    );
};

export default Search_allbumItem;
