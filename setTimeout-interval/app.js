function printNumbersInterval(){
	var i = 0;
	var timerId = setTimeout(function tick() {
		i++;
		console.log( i );
		timerId = setTimeout(tick, 100);
		if(i >= 20) clearTimeout(timerId, 4);
	}, 100);

};

printNumbersInterval();
