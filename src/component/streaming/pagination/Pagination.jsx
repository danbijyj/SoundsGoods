import React from 'react';
import './style.scss';

const Pagination = () => {
    return (
        <ul className="pagination">
            <li className="prev">
                <button>
                    <img src="/images/streaming/bg_prev.png" alt="prev" />
                </button>
            </li>
            <li className="page on">
                <button>1</button>
            </li>
            <li className="page">
                <button>2</button>
            </li>
            <li className="page">
                <button>3</button>
            </li>
            <li className="page">
                <button>4</button>
            </li>
            <li className="page">
                <button>5</button>
            </li>
            <li className="next">
                <button>
                    <img src="/images/streaming/bg_next.png" alt="next" />
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
