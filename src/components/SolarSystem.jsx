import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const obj = planets.map((el) => (
      <PlanetCard key={ el.name } planetName={ el.name } planetImage={ el.image } />));
    return (
      <>
        <div data-testid="solar-system" className="title">
          <Title headline="Planetas" className="title" />
        </div>
        <div>
          <div className="all-planets">
            {obj}
          </div>
        </div>
      </>
    );
  }
}

export default SolarSystem;
