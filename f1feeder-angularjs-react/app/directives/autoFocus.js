autoFocusDirective.$inject = ['$timeout'];
export default function autoFocusDirective($timeout) {
  return {
    restrict: 'A',
    link(scope, element) {
      $timeout(() => {
        element[0].focus();
        element[0].select();
      }, 0);
    },
  };
}
