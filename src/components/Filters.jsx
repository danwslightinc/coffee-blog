import React from 'react';
import './Filters.css';

const Filters = ({ activeCategory, onFilterChange }) => {
    const categories = ['All', 'Africa', 'South America', 'Asia', 'Central America'];

    return (
        <div className="filters-container container">
            <div className="filters-scroll">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => onFilterChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filters;
