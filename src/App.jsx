import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import CoffeeGrid from './components/CoffeeGrid';
import Footer from './components/Footer';
import CoffeeDetail from './components/CoffeeDetail';
import { coffees } from './data/coffees';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const filteredCoffees = activeCategory === "All"
    ? coffees
    : coffees.filter(c => c.continent === activeCategory);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <section id="collection" className="collection-section">
          <div className="container">
            <h2 className="section-title">My <span className="text-gold">Taste Log</span></h2>
            <Filters
              activeCategory={activeCategory}
              onFilterChange={setActiveCategory}
            />
            <CoffeeGrid
              coffees={filteredCoffees}
              onCoffeeClick={setSelectedCoffee}
            />
          </div>
        </section>
      </main>
      <Footer />

      {selectedCoffee && (
        <CoffeeDetail
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
        />
      )}
    </div>
  );
}

export default App;
