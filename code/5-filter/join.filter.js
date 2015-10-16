(function() {
  'use strict';

  angular
   .module('devopenspace')
   .filter('join', join);

  function join() {
    return function(list, separator) {
      return list.join(separator);
    };
  }
}());
