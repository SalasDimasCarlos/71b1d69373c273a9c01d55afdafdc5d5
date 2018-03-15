function timer() {
  console.log(number);
  if(number == 0) {
    clearInterval(variableInterval);
  }
  number = number - 1;
}

var number = 5;
var variableInterval = window.setInterval(timer, 500);
