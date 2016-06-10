//BACKEND
var numberArray = [];


var count = function(number){
  for (var i = 1; i <= number; i++) {
    numberArray.push(i)
    console.log(number)
  }
}


var piPo = function(number) {
  numberArray.forEach(function(number){
    if (number % 15 === 0) {
      numberArray[number-1] = "Ping Pong"
    } else if (number % 5 === 0) {
      numberArray[number-1] = "Pong"
    } else if (number % 3 === 0) {
      numberArray[number-1] = "Ping"
    } else {
      numberArray
    }
  });
  return number
}



//FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());

    numberArray = [];

    count(inputNumber);
    piPo(numberArray);
    console.log(numberArray)
    $("#display-results").text(numberArray);
  });
});
