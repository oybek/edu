function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 30;
const number3 = number1 + number2;
const printResult = true;

add(number1, number2, printResult);