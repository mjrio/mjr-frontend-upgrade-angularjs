import React from 'react';
import PropTypes from 'prop-types';

const DriverRaces = ({ races }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th colSpan="5">Formula 1 2013 Results</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Round</td>
          <td>Grand Prix</td>
          <td>Team</td>
          <td>Grid</td>
          <td>Race</td>
        </tr>
        {races && races.map(race => {
          return (
            <tr key={race.round}>
              <td>{race.round}</td>
              <td>
                <img src={`/assets/img/flags/${race.Circuit.Location.country}.png`} />{race.raceName}
              </td>
              <td>{race.Results[0].Constructor.name}</td>
              <td>{race.Results[0].grid}</td>
              <td>{race.Results[0].position}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

// eslint-disable-next-line
DriverRaces.propTypes = { races: PropTypes.array };
DriverRaces.defaultProps = {
  races: [],
};

export default DriverRaces;
