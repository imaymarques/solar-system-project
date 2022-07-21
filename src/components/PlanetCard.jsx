import React, { Component } from 'react';
import propTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name" className="name">{planetName}</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `img ${planetName}` }
        />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};
