import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ergast.com/api/f1/2013',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Zone.bindPromiseFn(fetch)('http://localhost:3001/books');

export default {
  getDrivers() {
    return api.get('driverStandings.json').then(res => {
      return res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  },
  getDriverDetails(id) {
    return api.get(`drivers/${id}/driverStandings.json`).then(res => {
      return res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });
  },
  getDriverRaces(id) {
    return api.get(`drivers/${id}/results.json`).then(res => {
      return res.data.MRData.RaceTable.Races;
    });
  },
};
