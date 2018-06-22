// Напишите функцию delay(f, ms),
// которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

function delay(f, ms) {
	return function(){
		var foo = this;
		var arg = arguments;

		setTimeout(function(){
			f.apply(foo, arg)
		},ms);
	}
}

function f(x) {
  alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
