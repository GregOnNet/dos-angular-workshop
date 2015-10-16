(function() {
  'use strict';

  // Wie in den Folien
  angular
   .module('devopenspace')
   .controller('workshopController', WorkshopController);

  function WorkshopController() {
    this.welcome='Willkommen in Leipzig!';
  }
}());
