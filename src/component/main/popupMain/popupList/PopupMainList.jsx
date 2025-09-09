import React from 'react';
import './style.scss';
import mainPopupData from '../../../../assets/api/mainPopupData';
import PopupMainItem from './PopupMainItem';
const PopupMainList = () => {
    return (
        <ul className="popup_right_list">
            {mainPopupData.map((popup) => (
                <PopupMainItem key={popup.id} popup={popup} />
            ))}
        </ul>
    );
};

export default PopupMainList;
