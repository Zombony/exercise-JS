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

  this.filterFood = function(filter) {
    return food.filter(filter);
  };

  this.removeFood = function(word){
    for (var i = 0; i < food.length; i++) {
      if(food[i].title == word) food.splice(i,1);
    }
  }

  var parentDisable = this.disable;
  this.disable = function() {
    if (food.length) {
      throw new Error("Нельзя выключить: внутри еда");
    }
    parentDisable();
  };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
