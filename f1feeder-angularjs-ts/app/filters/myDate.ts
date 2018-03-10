// myDate filter
// {{ date | myDate }}   =>  12 may 2018
myDateFilter.$inject = ['$filter'];
export function myDateFilter($filter) {
  return date => {
    if (!(date instanceof Date)) {
      return date;
    }
    return $filter('date')(date, 'dd MMM yyyy');
  };
}
