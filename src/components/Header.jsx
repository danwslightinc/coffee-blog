import React from 'react';
import { Coffee, Search } from 'lucide-react';
import './Header.css'; // specific styles for header if needed, or use inline/utility

const Header = () => {
    return (
        <header className="header bg-surface">
            <div className="container header-content">
                <div className="logo">
                    <Coffee className="text-gold" size={32} />
                    <span className="logo-text">My<span className="text-gold">CoffeeLog</span></span>
                </div>
                <nav className="nav">
                    <a href="#collection" className="nav-link">Regions</a>
                    <a href="#collection" className="nav-link">Process</a>
                    <a href="#collection" className="nav-link">About</a>
                </nav>
                <div className="actions">
                    <button className="icon-btn"><Search size={20} color="var(--color-text-main)" /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
