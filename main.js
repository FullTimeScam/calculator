let result = 0;
let operator = "";
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
}

//+ - * / 눌렀을 때
//현재 입력한 숫자를 저장 (문자->숫자)
// resultElement = 0

function onClickOperator(inputOperator) {
  result = +resultElement.innerHTML;

  resultElement.innerHTML = 0;

  operator = inputOperator;
}

function onClickEnter() {
  switch (operator) {
    case "+":
      result += +resultElement.innerHTML;
      resultElement.innerHTML = result;
      break;
    case "-":
      result -= +resultElement.innerHTML;
      resultElement.innerHTML = result;
      break;
    case "*":
      result *= +resultElement.innerHTML;
      resultElement.innerHTML = result;
      break;
    case "/":
      result = parseInt(result / +resultElement.innerHTML, 10);
      resultElement.innerHTML = result;
      break;
    default:
      console.log("잘못된 연산자입니다.");
  }
}

function onClickDelete() {
  resultElement.innerHTML = resultElement.innerHTML.substring(
    0,
    resultElement.innerHTML.length - 1
  );

  if (resultElement.innerHTML.length === 0) {
    resultElement.innerHTML = 0;
  }
}
