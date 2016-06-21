//BACKEND
var count = function(number){
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    numberArray.push(i)
  }
  return numberArray;
}

var piPo = function(numberArray) {
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
  return numberArray;
}

//FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#number").val());
    var outputArray = count(inputNumber);
    piPo(outputArray);
    numberArray = [];
    $("#display-results").text(outputArray);
  });
});
