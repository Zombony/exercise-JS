var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = (JSON.stringify(leader));
alert(JSON.stringify(leader));
var obj = JSON.parse(str);
for(key in obj) alert(obj[key]);
