let result = 0;
const resultElement = document.querySelector(".result");

resultElement.innerHTML = result;


function onClickNumber(number){
    resultElement.innerHTML=number;
}