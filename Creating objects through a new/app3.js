// Второй шаг – добавить калькулятору метод addMethod(name, func),
// который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

// Например, добавим операции умножить *, поделить / и возвести в степень **:

// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8


function Calculator() {

  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str){
  	var arr = str.split(" "), a = +arr[0], op = arr[1], b = +arr[2];

  	return methods[op](a,b);
  }

  this.addMethod = function(op, fu){
  	methods[op] = fu;
  }
}

var calc = new Calculator;
alert( calc.calculate("3 + 7") );


calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("/", function(a, b) {
  return a / b;
});
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");
alert( result ); // 8
