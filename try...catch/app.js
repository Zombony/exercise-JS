while(true){
  try{
    var calc = eval(prompt("Введите выражение"));
    if(calc == Infinity || calc == undefined){
      Throw("");
    }
      alert(calc);
      break;
  }
  catch(e){
    if(e.name == "ReferenceError" || e.name == "SyntaxError") alert(e.name + " Данные некорректны");
  }
}
