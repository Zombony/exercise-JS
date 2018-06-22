function printNumbersInterval(){
	var i = 0;
	var time = setInterval(function(){
		i++;
		console.log(i);
		if(i == 20) clearInterval(time);
	}, 100);
};


printNumbersInterval();
