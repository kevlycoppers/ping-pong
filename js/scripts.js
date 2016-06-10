//BACKEND
var start = 0
var numberArray = [];


var count = function(number){
  for (var i = 1; i <= number; i++) {
    numberArray.push(i)
    console.log(number)
  }
}

var ping = function(number) {
  numberArray.forEach(function(number) {
    if (number % 3 === 0) {
      numberArray[number-1] = "Ping";
    }
  });
}

var pong = function(number) {
  numberArray.forEach(function(number){
    if (number % 5 === 0) {
      numberArray[number-1] = "Pong"
    }
  });
}

var piPo = function(number) {
  numberArray.forEach(function(number){
    if (number % 15 === 0) {
      numberArray[number-1] = "Ping Pong"
    }
  });
}
//FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());

    numberArray = [];

    count(inputNumber);
    ping(numberArray);
    pong(numberArray);
    piPo(numberArray);
    console.log(numberArray)
  });
});
