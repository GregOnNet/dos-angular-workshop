(function() {
  'use strict';

  // Wie in den Folien
  angular
   .module('devopenspace')
   .controller('workshopController', WorkshopController);

  function WorkshopController() {
    this.welcome='Willkommen in Leipzig!';
    this.attendees= ['Marco', 'Anton', 'Shunfeng', 'Michael',
                     'Michael', 'Patrick', 'Enrico', 'Kim',
                     'Rocco', 'Alex', 'Salvatore', 'Stefan'];

    this.save = function() {
      alert('Callback from directive');
    };
  }
}());
