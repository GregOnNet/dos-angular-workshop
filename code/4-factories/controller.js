(function() {
  'use strict';

  // Wie in den Folien
  angular
   .module('devopenspace')
   .controller('workshopController', WorkshopController);

  WorkshopController.$inject = ['attendees', 'topics'];

  function WorkshopController(attendees, topics) {
    this.welcome='Willkommen in Leipzig!';
    this.attendees = attendees.getAll();
    this.topics = topics.getAll();

    console.warn(this.topics);
  }
}());
