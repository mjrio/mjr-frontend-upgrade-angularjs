import React, { Component } from 'react';

import apiService from '../core/services/apiService';
import Driver from '../components/Driver';
import DriverRaces from '../components/DriverRaces';

export default class DriverOverviewComponent extends Component {
  state = {
    driver: null,
    races: null,
  };

  componentDidMount() {
    const driverId = this.props.match.params.id;
    apiService.getDriverDetails(driverId).then(driver => {
      this.setState({ driver });
    });
    apiService.getDriverRaces(driverId).then(races => {
      this.setState({ races });
    });
  }

  render() {
    return (
      <section id="main">
        <nav id="secondary" className="main-nav col-md-3">
          <Driver driver={this.state.driver} />
          <br />
          <a href="/" className="btn btn-default">
            Back to drivers list
          </a>
        </nav>
        <div className="main-content col-md-9">
          <DriverRaces races={this.state.races} />
        </div>
      </section>
    );
  }
}
