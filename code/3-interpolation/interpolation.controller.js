(function() {
  'use strict';

  angular
    .module('interpolationModule')
    .controller('interpolationController', InterpolationController);

  function InterpolationController($interpolate){
    this.name = 'Gregor';
    this.interpolationExpression = $interpolate('{{ name | uppercase }}');
    
    this.uppercasedName = this.interpolationExpression({ name: this.name });
  }
}());
