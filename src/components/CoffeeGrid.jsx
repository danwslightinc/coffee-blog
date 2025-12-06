import React from 'react';
import CoffeeCard from './CoffeeCard';
import './CoffeeGrid.css';

const CoffeeGrid = ({ coffees, onCoffeeClick }) => {
    return (
        <div className="coffee-grid container">
            {coffees.map((coffee) => (
                <CoffeeCard
                    key={coffee.id}
                    coffee={coffee}
                    onClick={() => onCoffeeClick(coffee)}
                />
            ))}
        </div>
    );
};

export default CoffeeGrid;
