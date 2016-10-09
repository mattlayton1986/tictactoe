// GLOBAL VARIABLES
// persist between games
var totalScore = 0;

// GAME VARIABLES
// resets between games
  var game = new Object();
  game.userScore = 0;
  game.computerScore = 0;
  game.userMarker = undefined;
  game.computerMarker = undefined;
  game.initializeGame = function() {

    do {
      game.userMarker = prompt("X or O?").toLowerCase();
    } while ((game.userMarker != "x") &&
              (game.userMarker != "o"));

    game.computerMarker = (game.userMarker === "x") ? "o" : "x";

    $('#user span').text("(" + game.userMarker + ")");
    $('#user strong').text(game.userScore);
    $('#computer span').text("(" + game.computerMarker + ")");
    $('#computer strong').text(game.computerScore);
    // $('#score strong').text(game.totalScore);

  };


// Main Game Loop
$(document).ready(function() {

  // GAME INITIALIZATION
  game.initializeGame();
});
