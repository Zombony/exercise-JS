// Напишите функцию-конструктор Accumulator(startingValue).
// Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

var Accumulator = function(val){

	this.read = function(){
		return this.value += +prompt("Введите число");
	};

	this.value = val;	
}

var accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение