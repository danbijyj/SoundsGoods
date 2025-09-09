import React from 'react';
import { usemainAlbumStore } from '../../../../store';
import './style.scss';
import ArtistMobileItem from './ArtistMobileItem';
const ArtistMobileList = () => {
    const mainAlAtData = usemainAlbumStore((state) => state.mainAlAtData);
    const data = mainAlAtData.slice(0, 9);
    return (
        <ul className="artist_list_main">
            {data.map((item) => (
                <ArtistMobileItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default ArtistMobileList;
