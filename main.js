let result = 0;
const resultElement = document.querySelector(".result");

resultElement.innerHTML = result;

function onClickNumber(number) {
  if (resultElement.innerHTML.length > 14) return; //길이를 15까지만 제한
  if (resultElement.innerHTML === "0") {
    //0일 때는 교체
    resultElement.innerHTML = number;
  } else {
    //0이 아니면 숫자를 계속 추가
    resultElement.innerHTML += number;
  }
  console.log(resultElement.innerHTML.length);
}

//+ - * / 눌렀을 때
//현재 입력한 숫자를 저장 (문자->숫자)
// resultElement = 0

function onClickOperator(inputOperator) {
  result = +resultElement.innerHTML;

  resultElement.innerHTML = 0;

  operator = inputOperator;
}
