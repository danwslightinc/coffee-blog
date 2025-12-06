import React from 'react';
import { X, MapPin, Mountain, Droplet } from 'lucide-react';
import './CoffeeDetail.css';

const CoffeeDetail = ({ coffee, onClose }) => {
    if (!coffee) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}><X size={24} /></button>

                <div className="detail-grid">
                    <div className="detail-image-wrapper">
                        <img src={coffee.image} alt={coffee.name} className="detail-image" />
                    </div>

                    <div className="detail-info">
                        <h2 className="detail-title">{coffee.name}</h2>
                        <div className="detail-brand" style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{coffee.brand}</div>

                        <div className="detail-rating-date">
                            <span className="detail-rating">My Rating: <span className="text-gold">★ {coffee.rating}</span>/5</span>
                            <span className="detail-date">Brewed on: {coffee.brewDate}</span>
                        </div>

                        <p className="detail-description">
                            {coffee.description || `A premium selection from ${coffee.region}. This ${coffee.process} processed coffee offers a unique profile.`}
                        </p>

                        <div className="detail-meta">
                            <div className="meta-row">
                                <span className="meta-label"><MapPin size={16} className="text-gold" /> Region</span>
                                <span className="meta-value">{coffee.region}</span>
                            </div>
                            <div className="meta-row">
                                <span className="meta-label"><Mountain size={16} className="text-gold" /> Altitude</span>
                                <span className="meta-value">{coffee.altitude}</span>
                            </div>
                            <div className="meta-row">
                                <span className="meta-label"><Droplet size={16} className="text-gold" /> Process</span>
                                <span className="meta-value">{coffee.process}</span>
                            </div>
                        </div>

                        <div className="detail-notes">
                            <span className="notes-label">Tasting Notes:</span>
                            <div className="notes-list">
                                {coffee.notes.map((note, idx) => (
                                    <span key={idx} className="note-badge">{note}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;
