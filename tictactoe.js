// GLOBAL VARIABLES
// persist between games
var totalScore = 0;

// GAME OBJECT
var game = {
  // Game variables -- reset between games
  turnCount: 0,

  // Game functions
  initializeGame: function() {
    user.chooseMarker();
    computer.chooseMarker();
    user.setMarkerInUI();
    user.updateScore();
    computer.setMarkerInUI();
    computer.updateScore();
    $('#score strong').text(totalScore);
  },
  changeTurn: function() {
    ++this.turnCount;
    if ((this.turnCount % 2) !== 0) {
      user.setTurn(true);
      $('#user p').addClass('turn');
    } else {
      computer.setTurn(true);
      $('#computer p').addClass('turn');
    }
  }

};

// USER OBJECT
var user = {
  // User Variables
  score: 0,
  marker: undefined,
  turn: false,

  // User Functions
  reset: function() {
    this.score = 0;
    this.marker = undefined;
  },
  chooseMarker: function() {
    do {
      this.marker = prompt("X or O?").toLowerCase();
    } while ((this.marker != "x") &&
              (this.marker != "o"));
  },
  setMarkerInUI: function() {
    $('#user span').text("(" + this.marker + ")");
  },
  getTurn: function() {
    return turn;
  },
  setTurn: function(toggle) {
    this.turn = toggle;
  },
  updateScore: function() {
    if (game.turn > 0) {
      this.score += 1;
    }
    $('#user strong').text(this.score);
  }
};

// COMPUTER OBJECT
var computer = {
  // Computer Variables
  score: 0,
  marker: undefined,
  turn: false,

  // Computer Functions
  reset: function() {
    this.score = 0;
    this.marker = undefined;
  },
  chooseMarker: function() {
    this.marker = (user.marker === "x") ? "o" : "x";
  },
  setMarkerInUI: function() {
    $('#computer span').text("(" + this.marker + ")")
  },
  getTurn: function() {
    return this.turn;
  },
  setTurn: function(toggle) {
    this.turn = toggle;
  },
  updateScore: function() {
    if (game.turn > 0) {
      this.score += 1;
    }
    $('#computer strong').text(this.score);
  }
};


// Main Game Loop
$(document).ready(function() {
  // GAME INITIALIZATION
  game.initializeGame();
  game.changeTurn();
});
