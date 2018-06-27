function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(){
  Machine.apply(this, arguments);

  var food = [];
  var me = this;

  this.addFood = function(){
    if(!this._enabled) throw new Error("холодильник выключен");
    if((arguments.length + food.length) * 100 > this._power) throw new Error("Количество больше чем нужно")

      for(var i = 0; i < arguments.length; i++) food.push(arguments[i]);
    }

  this.getFood = function(){
    return food.slice();
  }


// Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.
  this.filterFood = function(filter) {
    return food.filter(filter);
  };

  this.removeFood = function(word){
    for (var i = 0; i < food.length; i++) {
      if(food[i].title == word) food.splice(i,1);
    }
  }
}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("сок"); // без эффекта

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

 alert( fridge.getFood().length ); // 2
