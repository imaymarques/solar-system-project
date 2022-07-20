import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const obj = planets.map((el) => (
      <PlanetCard key={ el.name } planetName={ el.name } planetImage={ el.image } />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {obj}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
