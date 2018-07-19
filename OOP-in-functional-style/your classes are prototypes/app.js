function CoffeeMachine(power) {
  this.waterAmount = 0;
  this.WATER_HEAT_CAPACITY = 4200;
  this.power = power;
}

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this.waterAmount = amount;
};

CoffeeMachine.prototype.run = function() {
  this.getTimeToBoil = function(){
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
  }

  setTimeout(function() {
    alert( 'Кофе готов!' );
  }, this.getTimeToBoil());
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
