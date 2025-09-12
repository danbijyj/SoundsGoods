import React from 'react';

const Con2Top100Item = ({ data }) => {
    return (
        <div className="rank">
            <li>
                <img src={data.image} alt="" />
                <h4>{data.title}</h4>
                <strong>{data.artist}</strong>
                <p>{data.release}</p>
            </li>
        </div>
    );
};

export default Con2Top100Item;
