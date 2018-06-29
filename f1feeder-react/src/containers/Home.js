import React, { Component } from 'react';
import apiService from '../core/services/apiService';

export default class Overview extends Component {
  state = {
    drivers: [],
  };

  componentWillMount() {
    // get the drivers from thj
    apiService.getDrivers().then(drivers => {
      this.setState({
        drivers,
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // calculated field
    let filteredDrivers = this.state.drivers.filter(driver => {
      const re = new RegExp(this.state.nameFilter, 'i');
      return (
        !this.state.nameFilter ||
        re.test(driver.Driver.givenName) ||
        re.test(driver.Driver.familyName)
      );
    });
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="info">
            <th colSpan="4">
              <h3 className="list-title"> Drivers Championship Standings </h3>
              <br />
              <input
                className="form-control"
                type="text"
                name="nameFilter"
                placeholder="Search..."
                onChange={this.handleChange}
              />
            </th>
          </tr>
        </thead>
        <tbody ui-sortable="true">
          {filteredDrivers &&
            filteredDrivers.map((driver, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={`/assets/img/flags/${driver.Driver.nationality}.png`} />
                    <a href={`drivers/${driver.Driver.driverId}`}>
                      {driver.Driver.givenName}&nbsp;{driver.Driver.familyName}
                    </a>
                  </td>
                  <td>{driver.Constructors[0].name}</td>
                  <td>{driver.points}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
