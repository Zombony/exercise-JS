// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

function Calculator(){
	var a,b;
	this.read = function(){
		a = +prompt("a?");
		b = +prompt("b?");
	}

	this.sum = function(){
		return a + b;
	}

	this.mul = function(){
		return a * b;
	}
}

var calculator = new Calculator(); 


calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() ); 
