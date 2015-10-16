var scope = function(value) {
  this.value = value;

  this.print = function() {
    console.warn(this.value);
  };
};

var controller = function(scope) {
  scope.print();
};

var scope = new scope('Hallo DI');
controller(scope);

console.log(controller.toString());

console.info(
  angular.injector().annotate(controller)
);
