import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const obj = missions.map((el) => (
      <MissionCard
        key={ el.name }
        name={ el.name }
        year={ el.year }
        country={ el.country }
        destination={ el.destination }
      />
    ));
    return (
      <>
        <div data-testid="missions" className="missoes">
          <Title headline="Missões" />
        </div>
        <div className="Missions-obj">
          {obj}
        </div>
      </>
    );
  }
}

export default Missions;
