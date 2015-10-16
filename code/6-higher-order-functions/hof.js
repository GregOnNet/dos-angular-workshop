function addiere(a) {
  return function(b) {
    return a + b;
  };
}

var addiere10 = addiere(10);
var addiere5 = addiere(5);
var addiere50 = addiere(50);

var result = addiere10(
               addiere5(
                 addiere50(20)));

console.log(result);
