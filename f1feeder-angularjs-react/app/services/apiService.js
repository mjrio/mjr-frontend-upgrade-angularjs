export default function apiService($http) {
  const ergastAPI = {};

  ergastAPI.getDrivers = () => {
    return $http({
      method: 'GET',
      url: 'http://ergast.com/api/f1/2013/driverStandings.json',
    }).then(response => {
      return response.data;
    });
  };

  ergastAPI.getDriverDetails = id => {
    return $http({
      method: 'GET',
      url: `http://ergast.com/api/f1/2013/drivers/${id}/driverStandings.json`,
    }).then(response => {
      return response.data;
    });
  };

  ergastAPI.getDriverRaces = id => {
    return $http({
      method: 'GET',
      url: `http://ergast.com/api/f1/2013/drivers/${id}/results.json`,
    }).then(response => {
      return response.data;
    });
  };

  return ergastAPI;
}
