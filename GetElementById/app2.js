var lis = document.getElementsByTagName('li');

for (i = 0; i < lis.length; i++) {
	var animal = lis[i].firstChild.data;
	var cntLi = lis[i].getElementsByTagName('li').length;
	alert(animal + " : " + cntLi);
}
