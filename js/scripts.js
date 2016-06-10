//BACKEND
var start = 0
var numberArray = [];


var countUp = function(munber){
  for (var i = 0; i <= number; i++) {
    number.push(i)
  }
}

//FRONTEND
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("#users-number").val());
    countUp(userNumber);
    ping(numberArray);
    pong(numberArray);
  });
});
