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
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

