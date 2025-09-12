import React from 'react';
import './style.scss';

const Pagination = ({ totalPages = 5, currentPage = 1, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <ul className="pagination">
            <li className="prev">
                <button onClick={() => onPageChange && onPageChange(currentPage - 1)}>
                    <img src="/images/streaming/bg_prev.png" alt="prev" />
                </button>
            </li>

            {pages.map((page) => (
                <li key={page} className={`page ${page === currentPage ? 'on' : ''}`}>
                    <button onClick={() => onPageChange && onPageChange(page)}>{page}</button>
                </li>
            ))}

            <li className="next">
                <button onClick={() => onPageChange && onPageChange(currentPage + 1)}>
                    <img src="/images/streaming/bg_next.png" alt="next" />
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
