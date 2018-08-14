function delay(ms){
	return new Promise((doo) => {
		setTimeout(doo,ms);
	});
}


delay(1000).then(() => alert("Hello!"));
