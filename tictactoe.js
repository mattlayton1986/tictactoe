
var userClick = function() {
  $(".box").click(function() {
    $(this).text("X");  // change to userMarker
    $(this).css("background-color", "rgb(242,94,126)");
  });
};


$(document).ready(function() {

  // Give player choice of X or O and set as 'userMarker'
  var userMarker;
  debugger;
  //do {
  //  userMarker = prompt("X or O?");
  //} while ((userMarker != "X") && (userMarker != "O"));

  // Set 'computerMarker' to whichever user didn't pick
  var computerMarker = (userMarker === "X") ? "O" : "X";

  $('#user span').text("(" + userMarker + ")");
  $('#computer span').text("(" + computerMarker + ")");
});
