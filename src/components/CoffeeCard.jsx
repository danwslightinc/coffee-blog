import React from 'react';
import { MapPin, Mountain, Droplet } from 'lucide-react';
import './CoffeeCard.css';

const CoffeeCard = ({ coffee, onClick }) => {
    return (
        <div className="coffee-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="card-image-wrapper">
                <img src={coffee.image} alt={coffee.name} className="card-image" />
                <div className="card-rating">★ {coffee.rating}</div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{coffee.name}</h3>

                <div className="card-meta">
                    <div className="meta-item">
                        <MapPin size={14} className="text-gold" />
                        <span>{coffee.region}</span>
                    </div>
                    <div className="meta-item">
                        <Mountain size={14} className="text-gold" />
                        <span>{coffee.altitude}</span>
                    </div>
                    <div className="meta-item">
                        <Droplet size={14} className="text-gold" />
                        <span>{coffee.process}</span>
                    </div>
                </div>

                <div className="card-notes">
                    {coffee.notes.map((note, index) => (
                        <span key={index} className="note-chip">{note}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
