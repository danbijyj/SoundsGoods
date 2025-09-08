import React from 'react';
import { usemainAlbumStore } from '../../../../store';
import ArtistItem from './ArtistItem';
import './style.scss';
const ArtistList = () => {
    const mainAlAtData = usemainAlbumStore((state) => state.mainAlAtData);
    return (
        <ul className="artist_list_main">
            {mainAlAtData.map((item) => (
                <ArtistItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default ArtistList;
