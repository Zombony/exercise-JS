function Machine() {
	this._enabled = false;
	var self = this;

	this.enable = function(){
		this._enabled = true;
	}

	this.disable = function(){
		this._enabled = false;
	}
}

function CoffeeMachine(power){
	var timeID;
	Machine.call(this);

	this.run = function(){
		if(!this._enabled) throw new Error("Кофемашина не запущена");
		timeID = setTimeout(function(){alert("Кофе готов")}, 1000);
	}
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет

