function calculate(operation, firstNum, secondNum) {
  switch (operation) {
    case 'add':
    case 'plus':
      return firstNum + secondNum;
    case 'sub':
    case 'minus':
      return firstNum - secondNum;
    case 'mul':
      return firstNum * secondNum;
    case 'div':
      return firstNum / secondNum;
    default:
      return 'No such operation';
  }
}
module.exports = { calculate };
