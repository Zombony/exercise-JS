function CoffeeMachine(power, capacity) {
	var waterAmount = 0;

	var WATER_HEAT_CAPACITY = 4200;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function(amount) {
		waterAmount += amount;
		chk(amount);
	};

	function onReady() {
		alert( 'Кофе готов!' );
	}

	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};
/////////////////////////////////my code///////////////////////////////////////
	function chk(col){
		if (col < 0) {
			throw new Error("Значение должно быть положительным");
		}
		if (col > capacity) {
			throw new Error("Нельзя залить больше, чем " + capacity);
		}
	}

	this.addWater = function(num){
		waterAmount += num;
		chk(waterAmount);
	}
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.setWaterAmount(200);
coffeeMachine.addWater(200);
coffeeMachine.run();
