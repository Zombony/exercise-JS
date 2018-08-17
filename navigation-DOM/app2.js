//first variant
for(let i = 0; i < document.body.children[0].children[0].children.length; i++){
	document.body.children[0].children[0].children[i].children[i].style.backgroundColor = 'red';
}

//second variant
var table = document.body.children[0];

for(let i = 0; i < table.rows.length; i++){
	table.rows[i].cells[i].style.backgroundColor = 'red';
}
