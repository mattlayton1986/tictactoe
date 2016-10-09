// GLOBAL VARIABLES
// persist between games
var totalScore = 0;

// GAME VARIABLES
// resets between games
var game = {
  userScore: 0,
  computerScore: 0,
  userMarker: undefined,
  computerMarker: undefined,
  initializeGame: function {
    do {
      game.userMarker = prompt("X or O?").toLowerCase();
    } while ((game.userMarker != "x") &&
              (game.userMarker != "o"));

    computerMarker = (game.userMarker === "x") ? "o" : "x";

    $('#user span').text("(" + game.userMarker + ")");
    $('#user strong').text(game.userScore);
    $('#computer span').text("(" + game.computerMarker + ")");
    $('#computer strong').text(game.computerScore);
    $('#score strong').text(game.totalScore);
  }
};


// Main Game Loop
$(document).ready(function() {

  // GAME INITIALIZATION
  game.initializeGame();
});
