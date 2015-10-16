(function() {
  'use strict';

  angular
    .module('devopenspace')
    .factory('attendees', attendeesFactory);

  function attendeesFactory() {

    // Objektliteral
    return {
      // API
      getAll: getAll
    };

    function getAll() {
      return ['Marco', 'Anton', 'Shunfeng', 'Michael',
              'Michael', 'Patrick', 'Enrico', 'Kim',
              'Rocco', 'Alex', 'Salvatore', 'Stefan'];
    }
  }
}());
