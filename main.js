const number1 = document.getElementById('#number_1').value;
const number2 = document.getElementById('#number_2').value;
const button = document.querySelector('#button');
const divblock = document.getElementById('#divblock');
const [valueStr, unitStr] = str.split(' ');

button.addEventListener('click', block){
    divblock.style.left = number1
    divblock.style.top = number2
}


function name (){
   divblock.style.left = number_1.value + 'px';
   divblock.style.left = number_2.value + 'px';
}