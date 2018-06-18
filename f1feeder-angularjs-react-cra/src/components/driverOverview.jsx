import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { apiService } from '../ajs/services/apiService';
import Driver from './driver';
import DriverRaces from './driverRaces';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class DriverOverviewComponent extends Component {
  static propTypes = { id: PropTypes.string.isRequired };
  state = {
    driver: null,
    races: null,
  };

  componentDidMount() {
    apiService.getDriverDetails(this.props.id).then(data => {
      this.setState({
        driver: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0],
      });
    });
    apiService.getDriverRaces(this.props.id).then(data => {
      this.setState({
        races: data.MRData.RaceTable.Races,
      });
    });
  }

  render() {
    return (
      <section id="main">
        <nav id="secondary" className="main-nav col-md-3">
          <Driver driver={this.state.driver} />
          <br />
          <a href="./#/drivers" className="btn btn-default">
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
