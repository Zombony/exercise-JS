function sumArgs() {
	arguments.reduce = [].reduce;
	return arguments.reduce(function(a,b){return a + b;	});
}

alert( sumArgs(1, 2, 3) );
