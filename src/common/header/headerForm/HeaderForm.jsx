import React, { useState } from 'react';
import './style.scss';
import { IoMdSearch } from 'react-icons/io';
const HeaderForm = () => {
    const [text, setText] = useState();
    return (
        <form>
            <label htmlFor="">인기 검색어</label>
            <input type="text" name="" id="" placeholder="검색" />
            <button type="submit" className="search_header">
                <i>
                    <IoMdSearch />
                </i>
            </button>
        </form>
    );
};

export default HeaderForm;
