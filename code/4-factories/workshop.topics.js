(function() {
  'use strict';

  angular
    .module('devopenspace')
    .service('topics', Topics);

  function Topics() {

    this.getAll = getAll;

    function getAll() {
      return ['Modules', 'Dependency Injection', 'Interpolation', ' Factories'];
    }
  }
}());
