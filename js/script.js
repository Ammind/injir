function Start(){
    var sum = document.getElementById('sum').value; //выцепляем значение value первого вводимого поля
    var srok = document.getElementById('srok').value; //выцепляем значение value второго вводимого поля
     var stav = document.getElementById('stav').value; //выцепляем значение value третьего вводимого поля

     var result = sum*stav/100/12/(1-1/(1+stav/100/12)**srok);
    
   
   document.getElementById('result').innerHTML = 'Ежемесячный платеж ' + (Math.floor(result));
   var resultt = result*srok;
   document.getElementById('resultt').innerHTML = 'Общая выплата ' + (Math.floor(resultt));
}