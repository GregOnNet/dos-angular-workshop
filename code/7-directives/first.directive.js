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
      templateUrl: './first.directive.html',
      controller: DirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };
  }

  function DirectiveController() {

    this.message = 'controller\'s message';
    console.log(this.welcome);

  }
}());
