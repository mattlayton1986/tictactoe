$(document).ready(function() {
  var userMarker;
  var computerMarker;
  var userScore = 0;
  var computerScore = 0;

  // Initialize Game
  do {
    debugger;
    userMarker = prompt("X or O?").toLowerCase();
  } while ((userMarker != "x") &&
            (userMarker != "o"));
  computerMarker = (userMarker === "x") ? "o" : "x";

  $('#user span').text("(" + userMarker + ")");
  $('#user strong').text(userScore);
  $('#computer span').text("(" + computerMarker + ")");
  $('#computer strong').text(computerScore);
  // $('#score strong').text(totalScore);
});

// Ignore this for now
var userClick = function() {
  $(".box").click(function() {
    this.text(userMarker);  // change to userMarker
    this.addClass(".taken");
    userScore += 1;
  });
