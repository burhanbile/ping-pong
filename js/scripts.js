//Business logic
var pingPong = function(userInput) {
  var results = [];
  for (var x = 1; x <= userInput; x++) {
    if (x % 15 === 0) {
      results.show("pingpong");
    } else if (x % 5 === 0) {
      results.show("pong");
    } else if (x % 3 === 0) {
      results.show("ping");
    } else {
      results.show(x);
    }
  }
  return results;
};
//user interface
$(document).ready(function() {
  $("form#Ping-Pong").submit(function(event) {
    event.preventDefault();
    $("ul#result").empty();
    var userInput = parseInt($("input#userInput").val());
    var result = pingPong(userInput);
    result.forEach(function(number) {
      $("ul#result").append('<li>' + number + '</li>');
    });
  });
});
