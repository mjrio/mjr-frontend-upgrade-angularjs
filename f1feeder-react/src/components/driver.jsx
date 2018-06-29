import React from 'react';
import PropTypes from 'prop-types';

const Driver = ({ driver }) => {
  if (driver) {
    return (
      <div>
        <div className="driver-picture">
          <div className="avatar">
            <img src={`/assets/img/drivers/${driver.Driver.driverId}.png`} />
            <img src={`/assets/img/flags/${driver.Driver.nationality}.png`} />
            <br /> {driver.Driver.givenName} {driver.Driver.familyName}
          </div>
        </div>
        <div className="driver-status">
          Country: {driver.Driver.nationality}
          <br /> Team: {driver.Constructors[0].name}
          <br /> Birth: {driver.Driver.dateOfBirth}
          <br />
          <a href={`http://${driver.Driver.url}`} target="_blank" rel="noopener noreferrer">Biography</a>
        </div>
      </div>
    );
  }
  return <div />;
};

// eslint-disable-next-line
Driver.propTypes = { driver: PropTypes.object };
Driver.defaultProps = {
  driver: {},
};

export default Driver;
