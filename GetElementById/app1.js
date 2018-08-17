// Все элементы label внутри таблицы. Должно быть 3 элемента.
// Первую ячейку таблицы (со словом "Возраст").
// Вторую форму в документе.
// Форму с именем search, без использования её позиции в документе.
// Элемент input в форме с именем search. Если их несколько, то нужен первый.
// Элемент с именем info[0], без точного знания его позиции в документе.
// Элемент с именем info[0], внутри формы с именем search-person.


var tbl = document.getElementById('age-table');
var lbl = tbl.getElementsByTagName('label');

var fCall = tbl.querySelector('td');

var scnForm = document.getElementsByTagName('form')[1];

var nmForm = document.getElementsByName('search');

var fInput = nmForm[0].querySelector('input');

var inf = document.getElementsByName('info[0]');

var nmForm2 = document.getElementsByName('search-person');
document.querySelector('form[name = "search-person"][name = info[0]]');
