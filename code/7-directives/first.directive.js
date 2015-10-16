(function() {
  'use strict';

  angular
    .module('devopenspace')
    .directive('dosHello', dosHello);

  function dosHello() {
    return {
      scope: {
        welcome: "=",
        save: "&"
      },
      templateUrl: './first.directive.html'
    };
  }

}());
