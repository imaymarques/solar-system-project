import React, { Component } from 'react';
import propTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="m-name">
          <p data-testid="mission-name">{ name }</p>
        </div>
        <p data-testid="mission-year" className="mission-year">{ year }</p>
        <p data-testid="mission-country" className="mission-country">{ country }</p>
        <p data-testid="mission-destination" className="destination">{ destination }</p>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};
